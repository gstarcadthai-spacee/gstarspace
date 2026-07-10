/** Gstar Workspace Backend V1 */
const DB_PROPERTY = 'GSTAR_SPREADSHEET_ID';

const SCHEMAS = {
  Products: ['ID','Name','Category','Tagline','Description','CurrentVersion','DownloadURL','TrialScriptURL','Developer','Platform','License','WebsiteURL','OpenTicketURL','Status','Logo','Sort','UpdatedAt'],
  ProductVersions: ['ID','ProductID','Version','Platform','DownloadURL','IsCurrent','Sort','UpdatedAt'],
  PriceLists: ['ID','ProductID','Edition','LicenseType','Version','Region','Currency','Price','PromoPrice','Note','Status','Sort','UpdatedAt'],
  Resources: ['ID','Title','Category','Type','ProductID','Hubs','URL','Description','Status','Sort','UpdatedAt'],
  Announcements: ['ID','Title','Description','Priority','ButtonURL','Status','Pinned','StartDate','EndDate','UpdatedAt'],
  Settings: ['Key','Value','UpdatedAt'],
  ActivityLog: ['Timestamp','Action','Module','RecordID','Description']
};

const MODULE_TO_SHEET = {
  products: 'Products',
  versions: 'ProductVersions',
  pricelists: 'PriceLists',
  resources: 'Resources',
  announcements: 'Announcements',
  settings: 'Settings'
};

function setupDatabase() {
  const props = PropertiesService.getScriptProperties();
  const existingId = props.getProperty(DB_PROPERTY);
  if (existingId) {
    const existing = SpreadsheetApp.openById(existingId);
    Logger.log(existing.getUrl());
    return {ok:true, message:'Database already exists.', spreadsheetId:existing.getId(), spreadsheetUrl:existing.getUrl()};
  }

  const ss = SpreadsheetApp.create('Gstar Workspace Database');
  Object.entries(SCHEMAS).forEach(([sheetName, headers]) => {
    let sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    sheet.clear();
    sheet.getRange(1,1,1,headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    sheet.getRange(1,1,1,headers.length).setFontWeight('bold').setBackground('#EAF2FF').setFontColor('#0B5CFF');
    sheet.autoResizeColumns(1, headers.length);
  });

  const defaultSheet = ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length > 1) ss.deleteSheet(defaultSheet);

  const now = new Date().toISOString();
  ss.getSheetByName('Settings').getRange(2,1,4,3).setValues([
    ['WorkspaceName','Gstar Workspace',now],
    ['WorkspaceVersion','V4',now],
    ['SupportURL','https://cs.applicadthai.com/',now],
    ['Theme','Glass Light',now]
  ]);

  props.setProperty(DB_PROPERTY, ss.getId());
  Logger.log(ss.getUrl());
  return {ok:true, message:'Database created.', spreadsheetId:ss.getId(), spreadsheetUrl:ss.getUrl()};
}

function getDatabase_() {
  const id = PropertiesService.getScriptProperties().getProperty(DB_PROPERTY);
  if (!id) throw new Error('Database not initialized. Run setupDatabase() first.');
  return SpreadsheetApp.openById(id);
}

function doGet(e) {
  try {
    const action = String((e && e.parameter && e.parameter.action) || 'health').toLowerCase();
    if (action === 'health') return json_({ok:true,service:'Gstar Workspace Backend',version:'1.0.0',timestamp:new Date().toISOString()});
    if (action === 'bootstrap') return json_({ok:true,data:{
      products:listRecords_('products'),
      versions:listRecords_('versions'),
      pricelists:listRecords_('pricelists'),
      resources:listRecords_('resources'),
      announcements:listRecords_('announcements'),
      settings:listRecords_('settings')
    }});
    if (action === 'list') {
      const module = normalizeModule_(e.parameter.module);
      return json_({ok:true,data:listRecords_(module)});
    }
    if (action === 'get') {
      const module = normalizeModule_(e.parameter.module);
      return json_({ok:true,data:getRecordById_(module,String(e.parameter.id||''))});
    }
    throw new Error('Unsupported GET action.');
  } catch (error) { return jsonError_(error); }
}

function doPost(e) {
  try {
    const payload = parseBody_(e);
    const action = String(payload.action||'').toLowerCase();
    const module = normalizeModule_(payload.module);
    if (action === 'create') return json_({ok:true,data:createRecord_(module,payload.data||{})});
    if (action === 'update') return json_({ok:true,data:updateRecord_(module,String(payload.id||''),payload.data||{})});
    if (action === 'delete') { deleteRecord_(module,String(payload.id||'')); return json_({ok:true}); }
    if (action === 'upsert') return json_({ok:true,data:upsertRecord_(module,payload.data||{})});
    throw new Error('Unsupported POST action.');
  } catch (error) { return jsonError_(error); }
}

function listRecords_(module) {
  const sheet = getSheetForModule_(module);
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return [];
  const headers = values[0];
  return values.slice(1).filter(row=>row.some(v=>v!=='')) .map(row=>rowToObject_(headers,row));
}

function getRecordById_(module,id) {
  if (!id) throw new Error('Missing record id.');
  return listRecords_(module).find(r=>String(recordId_(module,r))===id) || null;
}

function createRecord_(module,data) {
  const sheet = getSheetForModule_(module);
  const headers = SCHEMAS[MODULE_TO_SHEET[module]];
  const normalized = normalizeRecord_(module,data,true);
  sheet.appendRow(headers.map(h=>valueForHeader_(normalized,h)));
  logActivity_('CREATE',module,recordId_(module,normalized),describeRecord_(module,normalized));
  return normalized;
}

function updateRecord_(module,id,data) {
  if (!id) throw new Error('Missing record id.');
  const sheet = getSheetForModule_(module);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idHeader = module==='settings'?'Key':'ID';
  const idIndex = headers.indexOf(idHeader);
  const rowIndex = values.findIndex((row,index)=>index>0 && String(row[idIndex])===id);
  if (rowIndex < 0) throw new Error('Record not found.');
  const existing = rowToObject_(headers,values[rowIndex]);
  const merged = normalizeRecord_(module,Object.assign({},existing,data),false);
  sheet.getRange(rowIndex+1,1,1,headers.length).setValues([headers.map(h=>valueForHeader_(merged,h))]);
  logActivity_('UPDATE',module,id,describeRecord_(module,merged));
  return merged;
}

function upsertRecord_(module,data) {
  const id = String(recordId_(module,data)||'');
  if (!id) return createRecord_(module,data);
  return getRecordById_(module,id) ? updateRecord_(module,id,data) : createRecord_(module,data);
}

function deleteRecord_(module,id) {
  if (!id) throw new Error('Missing record id.');
  const sheet = getSheetForModule_(module);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idHeader = module==='settings'?'Key':'ID';
  const idIndex = headers.indexOf(idHeader);
  const rowIndex = values.findIndex((row,index)=>index>0 && String(row[idIndex])===id);
  if (rowIndex < 0) throw new Error('Record not found.');
  sheet.deleteRow(rowIndex+1);
  logActivity_('DELETE',module,id,'Deleted record');
}

function normalizeRecord_(module,input,isNew) {
  const now = new Date().toISOString();
  const data = Object.assign({},input);
  if (module === 'settings') {
    const key = data.Key || data.key;
    if (!key) throw new Error('Settings record requires Key.');
    return {Key:String(key),Value:data.Value!==undefined?data.Value:data.value,UpdatedAt:now};
  }
  const id = String(data.ID || data.id || (isNew?Utilities.getUuid():''));
  if (!id) throw new Error('Record ID is required.');
  const schema = SCHEMAS[MODULE_TO_SHEET[module]];
  const result = {ID:id};
  schema.forEach(header=>{
    if (header==='ID') return;
    if (header==='UpdatedAt') { result.UpdatedAt = now; return; }
    const camel = header.charAt(0).toLowerCase()+header.slice(1);
    let value = data[header];
    if (value===undefined) value = data[camel];
    if (header==='Hubs' && Array.isArray(value)) value = value.join('|');
    if (['Pinned','IsCurrent'].includes(header)) value = Boolean(value);
    if (header==='Sort' && value!=='' && value!==undefined) value = Number(value);
    result[header] = value!==undefined ? value : '';
  });
  return result;
}

function getSheetForModule_(module) {
  const sheetName = MODULE_TO_SHEET[module];
  if (!sheetName) throw new Error('Unknown module.');
  const sheet = getDatabase_().getSheetByName(sheetName);
  if (!sheet) throw new Error('Sheet not found: '+sheetName);
  return sheet;
}

function normalizeModule_(module) {
  const key = String(module||'').toLowerCase();
  if (!MODULE_TO_SHEET[key]) throw new Error('Invalid module.');
  return key;
}

function rowToObject_(headers,row) {
  const obj = {};
  headers.forEach((header,index)=>{
    let value = row[index];
    if (value instanceof Date) value = value.toISOString();
    obj[header] = header==='Hubs' && typeof value==='string' ? (value?value.split('|').filter(Boolean):[]) : value;
  });
  return obj;
}

function valueForHeader_(record,header) {
  let value = record[header];
  if (header==='Hubs' && Array.isArray(value)) value = value.join('|');
  return value!==undefined ? value : '';
}

function recordId_(module,record) { return module==='settings' ? (record.Key||record.key||'') : (record.ID||record.id||''); }
function describeRecord_(module,record) { return String(record.Name||record.Title||record.Edition||record.Key||record.ID||module); }

function logActivity_(action,module,recordId,description) {
  const sheet = getDatabase_().getSheetByName('ActivityLog');
  if (sheet) sheet.appendRow([new Date(),action,module,recordId,description]);
}

function parseBody_(e) {
  if (!e || !e.postData || !e.postData.contents) throw new Error('Missing request body.');
  try { return JSON.parse(e.postData.contents); } catch (err) { throw new Error('Invalid JSON body.'); }
}

function json_(data) { return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON); }
function jsonError_(error) { return json_({ok:false,error:error&&error.message?error.message:String(error)}); }
