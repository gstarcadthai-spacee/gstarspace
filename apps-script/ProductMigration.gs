/**
 * Gstar Workspace Product Migration V1
 * Paste this file below the existing Backend V1 code in Apps Script.
 * Run upgradeProductSchemaAndSeed() once, then redeploy the Web App.
 */

function upgradeProductSchemaAndSeed() {
  const ss = getDatabase_();
  const sheet = ss.getSheetByName('Products');
  if (!sheet) throw new Error('Products sheet not found.');

  const requiredHeaders = [
    'ID','Name','Category','Tagline','Description','CurrentVersion','DownloadURL',
    'Developer','Platform','License','WebsiteURL','OpenTicketURL','Status',
    'Logo','Sort','UpdatedAt'
  ];

  ensureHeaders_(sheet, requiredHeaders);
  seedLegacyProducts_(sheet);

  return {
    ok: true,
    message: 'Products schema upgraded and legacy products seeded.',
    spreadsheetUrl: ss.getUrl()
  };
}

function ensureHeaders_(sheet, requiredHeaders) {
  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const current = sheet.getRange(1, 1, 1, lastColumn).getValues()[0]
    .map(value => String(value || '').trim());

  requiredHeaders.forEach(header => {
    if (!current.includes(header)) current.push(header);
  });

  sheet.getRange(1, 1, 1, current.length).setValues([current]);
  sheet.getRange(1, 1, 1, current.length)
    .setFontWeight('bold')
    .setBackground('#EAF2FF')
    .setFontColor('#0B5CFF');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, current.length);
}

function seedLegacyProducts_(sheet) {
  const rows = sheet.getDataRange().getValues();
  const headers = rows[0];
  const idIndex = headers.indexOf('ID');
  const existingIds = new Set(
    rows.slice(1).map(row => String(row[idIndex] || '').trim()).filter(Boolean)
  );

  const now = new Date().toISOString();
  const products = [
    ['gstarcad','GstarCAD','CAD','Professional CAD Platform','Professional CAD Platform','2027 SP0','','Gstarsoft','Windows / macOS','Perpetual / Subscription','https://www.gstarcad.net/','https://cs.applicadthai.com/','Active','product/GstarCAD.png',1,now],
    ['gstarcad-architecture','GstarCAD Architecture','CAD','Architecture CAD Solution','Architecture CAD Solution','2027 SP0','','Gstarsoft','Windows','Perpetual / Subscription','https://www.gstarcad.net/','https://cs.applicadthai.com/','Active','product/GstarCAD-Architecture.png',2,now],
    ['gstarcad-mechanical','GstarCAD Mechanical','CAD','Mechanical Design CAD','Mechanical Design CAD','2027 SP0','','Gstarsoft','Windows','Perpetual / Subscription','https://www.gstarcad.net/','https://cs.applicadthai.com/','Active','product/GstarCAD-Mechanical.png',3,now],
    ['solidworks','SolidWorks','CAD','3D CAD Design Platform','3D CAD Design Platform','2026','','Dassault Systèmes','Windows','Subscription','https://www.solidworks.com/','https://cs.applicadthai.com/','Active','product/SolidWorks.png',4,now],
    ['gstarbim','GstarBIM','BIM','BIM Design Workspace','BIM Design Workspace','2026','','Gstarsoft','Windows','Perpetual / Subscription','https://www.thaigstarcad.com/gstarbim','https://cs.applicadthai.com/','Active','product/GstarBIM.png',5,now],
    ['extraxion','ExtrAXION','BOQ & Estimation','BOQ & Estimation Software','BOQ & Estimation Software','Latest','','ExtrAXION','Windows','Subscription','https://www.thaigstarcad.com/','https://cs.applicadthai.com/','Active','product/ExtrAXION.png',6,now],
    ['gstarcad-365','GstarCAD 365','Viewer & Collaboration','Cloud CAD Collaboration','Cloud CAD Collaboration','Latest','','Gstarsoft','Web / Mobile','Subscription','https://www.gstarcad.net/','https://cs.applicadthai.com/','Active','product/GstarCAD-365.png',7,now],
    ['3d-fastview','3D FastView','Viewer & Collaboration','3D Viewer & Collaboration','3D Viewer & Collaboration','Latest','','Gstarsoft','Windows / Web / Mobile','Subscription','https://www.3dfastview.com/','https://cs.applicadthai.com/','Active','product/3D-Fastview.png',8,now],
    ['cadprofi','CADProfi','Add-ons','CAD Add-on Library','CAD Add-on Library','Latest','','CADProfi','Windows','Perpetual / Subscription','https://www.cadprofi.com/','https://cs.applicadthai.com/','Active','product/CADProfi.png',9,now],
    ['formlabs','FormLabs','3D Printing','Professional 3D Printing','Professional 3D Printing','Latest','','Formlabs','Hardware / Software','Hardware / Subscription','https://formlabs.com/','https://cs.applicadthai.com/','Active','product/FormLabs.png',10,now]
  ];

  const objects = products.map(values => {
    const obj = {};
    requiredProductHeaders_().forEach((header, index) => obj[header] = values[index]);
    return obj;
  });

  const newRows = objects
    .filter(product => !existingIds.has(product.ID))
    .map(product => headers.map(header => product[header] !== undefined ? product[header] : ''));

  if (newRows.length) {
    sheet.getRange(sheet.getLastRow() + 1, 1, newRows.length, headers.length).setValues(newRows);
  }
}

function requiredProductHeaders_() {
  return [
    'ID','Name','Category','Tagline','Description','CurrentVersion','DownloadURL',
    'Developer','Platform','License','WebsiteURL','OpenTicketURL','Status',
    'Logo','Sort','UpdatedAt'
  ];
}
