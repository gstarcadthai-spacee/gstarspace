const mgIcons={
  home:'<svg viewBox="0 0 24 24"><path d="m3 11 9-8 9 8"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path></svg>',
  dashboard:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="8" rx="2"></rect><rect x="14" y="3" width="7" height="5" rx="2"></rect><rect x="14" y="12" width="7" height="9" rx="2"></rect><rect x="3" y="15" width="7" height="6" rx="2"></rect></svg>',
  package:'<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>',
  resource:'<svg viewBox="0 0 24 24"><path d="M4 19.5V5a2 2 0 0 1 2-2h11l3 3v13.5A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5Z"></path><path d="M14 3v4h4"></path><path d="M8 12h8"></path><path d="M8 16h6"></path></svg>',
  route:'<svg viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"></circle><circle cx="18" cy="5" r="3"></circle><path d="M8.6 17.4 15.4 6.6"></path></svg>',
  megaphone:'<svg viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3Z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>',
  settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4l-.4 1.6h-4l-.4-1.6A1.7 1.7 0 0 0 8 19.4l-1.88.34-2.83-2.83.34-1.88A1.7 1.7 0 0 0 3 13.6V10l1.6-1A1.7 1.7 0 0 0 4.26 7.1l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6L10 3h4l1 1.6a1.7 1.7 0 0 0 1.9-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9l1.6 1v4l-1.6 1Z"></path></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>',
  database:'<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path></svg>',
  info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>',
  close:'<svg viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  eye:'<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
  copy:'<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
  open:'<svg viewBox="0 0 24 24"><path d="M14 3h7v7"></path><path d="M10 14 21 3"></path><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path></svg>',
  bell:'<svg viewBox="0 0 24 24"><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path></svg>',
  palette:'<svg viewBox="0 0 24 24"><path d="M12 22a10 10 0 1 1 10-10c0 1.7-1.3 3-3 3h-1.8c-.9 0-1.5.9-1.1 1.7l.3.7c.7 1.8-.6 3.6-2.4 3.6H12Z"></path></svg>'
};

const hubs=['Marketing','Sales','Support','Product','Knowledge'];
const resourceHubRules={
  'Price List':['Sales'],
  'Brochure':['Marketing','Sales','Product'],
  'Presentation':['Marketing','Sales'],
  'KV':['Marketing'],
  'Manual':['Support','Product','Knowledge'],
  'Installer':['Support','Product'],
  'Canva':['Marketing'],
  'Website':['Marketing','Sales','Support','Product','Knowledge'],
  'Document':['Sales','Support','Product','Knowledge']
};
let state={products:[],versions:[],pricelists:[],resources:[],announcements:[],settings:[],activity:[]};
let loading=false;

function applyManagementIcons(){document.querySelectorAll('[data-m-icon]').forEach(el=>{el.innerHTML=mgIcons[el.dataset.mIcon]||''})}
function escapeHTML(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function attr(s){return escapeHTML(s).replace(/`/g,'&#96;')}
function byId(id){return document.getElementById(id)}
function productName(id){return state.products.find(p=>p.ID===id)?.Name||id||'All Products'}
function versionHistory(productId){return state.versions.filter(v=>v.ProductID===productId&&!v.IsCurrent)}

async function loadData(showMessage=false){
  if(loading)return;
  loading=true;
  setBusy(true);
  try{
    const data=await GstarAPI.bootstrap();
    state={...state,...data,activity:state.activity};
    if(showMessage)flash('Data refreshed');
    renderAll();
  }catch(error){
    console.error(error);
    flash(`API error: ${error.message}`,true);
  }finally{
    loading=false;
    setBusy(false);
  }
}

function setBusy(isBusy){
  document.body.classList.toggle('management-loading',isBusy);
  document.querySelectorAll('.modal-actions button,.section-head button').forEach(btn=>btn.disabled=isBusy);
}

function flash(message,isError=false){
  let el=byId('managementApiToast');
  if(!el){el=document.createElement('div');el.id='managementApiToast';el.className='toast';document.body.appendChild(el)}
  el.textContent=message;
  el.style.background=isError?'#b42318':'#0f172a';
  el.classList.add('show');
  clearTimeout(el._timer);el._timer=setTimeout(()=>el.classList.remove('show'),2200);
}

function logLocal(text){state.activity.unshift(text);state.activity=state.activity.slice(0,8)}
function setSection(id){document.querySelectorAll('.mg-section').forEach(s=>s.classList.remove('active'));byId(id)?.classList.add('active');document.querySelectorAll('.mg-tab').forEach(b=>b.classList.toggle('active',b.dataset.section===id));renderAll()}
function globalQ(){return (byId('globalSearch')?.value||'').toLowerCase().trim()}

function renderStats(){
  const stats=[['package',state.products.length,'Products'],['resource',state.resources.length,'Resources'],['megaphone',state.announcements.length,'Announcements'],['route',hubs.length,'Active Hubs']];
  byId('stats').innerHTML=stats.map(s=>`<div class="card"><div class="mg-stat-icon"><span data-m-icon="${s[0]}"></span></div><div class="mg-stat-num">${s[1]}</div><div class="mg-stat-label">${s[2]}</div></div>`).join('');applyManagementIcons();
}

function renderProducts(){
  const f=(byId('productFilter')?.value||'').toLowerCase();const st=byId('productStatus')?.value||'All';const q=globalQ();
  const arr=state.products.filter(p=>(st==='All'||p.Status===st)&&`${p.Name} ${p.Category} ${p.CurrentVersion} ${p.Platform} ${p.Description}`.toLowerCase().includes(`${f} ${q}`.trim()));
  byId('productRows').innerHTML=arr.map(p=>`<tr><td><div class="table-title">${escapeHTML(p.Name)}</div><div class="table-sub">${escapeHTML(p.Category||'')}</div></td><td><strong>${escapeHTML(p.CurrentVersion||'-')}</strong><div class="table-sub">${versionHistory(p.ID).length} old versions</div></td><td>${escapeHTML(p.Platform||'-')}</td><td>${escapeHTML(p.License||'-')}</td><td><span class="tag ${p.Status==='Active'?'green':p.Status==='Coming Soon'?'orange':''}">${escapeHTML(p.Status||'-')}</span></td><td><div class="row-actions"><button class="mini-action" onclick="copyLink(this,'${attr(p.DownloadURL||'')}')"><span data-m-icon="copy"></span> Copy</button><button class="mini-action" onclick="openProductModal('${attr(p.ID)}')">Edit</button><button class="mini-action" onclick="deleteProduct('${attr(p.ID)}')">Delete</button></div></td></tr>`).join('')||`<tr><td colspan="6"><div class="empty-state">No products found.</div></td></tr>`;applyManagementIcons();
}

function renderResources(){
  const f=(byId('resourceFilter')?.value||'').toLowerCase();const hub=byId('hubFilter')?.value||'All';const cat=byId('categoryFilter')?.value||'All';const q=globalQ();
  const arr=state.resources.filter(r=>(hub==='All'||(r.Hubs||[]).includes(hub))&&(cat==='All'||r.Category===cat)&&`${r.Title} ${r.Category} ${r.Type} ${productName(r.ProductID)} ${r.Description}`.toLowerCase().includes(`${f} ${q}`.trim()));
  byId('resourceCards').innerHTML=arr.map(resourceCard).join('')||'<div class="card empty-state">No resources found.</div>';applyManagementIcons();
}
function resourceCard(r){const tags=(r.Hubs||[]).length?r.Hubs.map(h=>`<span class="soft-tag">${escapeHTML(h)}</span>`).join(''):'<span class="soft-tag empty">No hub selected</span>';return `<article class="card resource-card"><div class="resource-icon"><span data-m-icon="resource"></span></div><div><span class="soft-tag ${r.Status==='Published'?'green':r.Status==='Draft'?'orange':'gray'}">${escapeHTML(r.Status||'Draft')}</span></div><h3>${escapeHTML(r.Title||'Untitled')}</h3><p>${escapeHTML(r.Description||'No description')}</p><div class="resource-meta"><span class="soft-tag">${escapeHTML(r.Category||'-')}</span><span class="soft-tag gray">${escapeHTML(r.Type||'-')}</span><span class="soft-tag gray">${escapeHTML(productName(r.ProductID))}</span></div><div class="resource-meta">${tags}</div><div class="resource-actions"><button class="btn secondary" onclick="copyLink(this,'${attr(r.URL||'')}')"><span data-m-icon="copy"></span>Copy</button><button class="btn secondary" onclick="openUrl('${attr(r.URL||'#')}')"><span data-m-icon="open"></span>Open</button><button class="btn secondary" onclick="openResourceModal('${attr(r.ID)}')">Edit</button></div></article>`}
function renderHubs(){byId('hubCards').innerHTML=hubs.map(h=>{const list=state.resources.filter(r=>(r.Hubs||[]).includes(h)&&r.Status!=='Hidden');return `<article class="card resource-card hub-card"><div class="hub-head"><div class="resource-icon"><span data-m-icon="route"></span></div><div><h3>${h} Hub</h3><p>${list.length} resources routed here</p></div></div><div class="resource-mini-list">${list.slice(0,6).map(r=>`<div class="resource-mini"><strong>${escapeHTML(r.Title)}</strong><small>${escapeHTML(r.Category)} · ${escapeHTML(productName(r.ProductID))}</small></div>`).join('')||`<div class="resource-mini"><strong>No resource yet</strong><small>Select ${h} in Show in Hubs.</small></div>`}</div></article>`}).join('');applyManagementIcons()}
function renderAnnouncements(){byId('announcementRows').innerHTML=state.announcements.map(a=>`<tr><td><div class="table-title">${escapeHTML(a.Title)}</div><div class="table-sub">${escapeHTML(a.Description||'')}</div></td><td><span class="tag ${a.Priority==='High'?'orange':a.Priority==='Critical'?'danger':''}">${escapeHTML(a.Priority||'Normal')}</span></td><td>${escapeHTML(a.Status||'Draft')}</td><td><button class="mini-action" onclick="copyLink(this,'${attr(a.ButtonURL||'')}')"><span data-m-icon="copy"></span> Copy</button></td><td><div class="row-actions"><button class="mini-action" onclick="openAnnouncementModal('${attr(a.ID)}')">Edit</button><button class="mini-action" onclick="deleteAnnouncement('${attr(a.ID)}')">Delete</button></div></td></tr>`).join('')||`<tr><td colspan="5"><div class="empty-state">No announcements found.</div></td></tr>`;applyManagementIcons()}
function renderActivity(){const rows=state.activity.length?state.activity:['Connected to Apps Script backend'];byId('activityList').innerHTML=rows.map(x=>`<div class="activity-item"><span class="activity-dot"></span><div><strong>${escapeHTML(x)}</strong><small>${new Date().toLocaleDateString('th-TH')}</small></div></div>`).join('')}

function renderManagementNotifications() {
  const panel = byId('notificationItems');
  if (!panel) return;

  const activeAnnouncements = state.announcements
    .filter(a => a.Status === 'Published')
    .slice(0, 5); // แสดงสูงสุด 5 รายการ

  panel.innerHTML = activeAnnouncements.map(a => `
    <div class="list-item">
      <div>
        <strong>${escapeHTML(a.Title)}</strong>
        <span>${escapeHTML(a.Description || '')}</span>
      </div>
    </div>
  `).join('') || `
    <div class="empty-state">No new announcements.</div>
  `;
}
function renderAll(){renderStats();renderProducts();renderResources();renderHubs();renderAnnouncements();renderActivity();populateProductSelect();populateResourceSelect();renderManagementNotifications()}

function populateProductSelect(selectedValue){
  const el=byId('rProduct');
  if(!el||el.tagName!=='SELECT')return;

  const selected=selectedValue!==undefined?selectedValue:el.value;
  const products=Array.isArray(state.products)?state.products:[];

  el.innerHTML='<option value="">All Products</option>'+
    products
      .filter(product=>(product.ID||product.id)&&(product.Name||product.name))
      .slice()
      .sort((a,b)=>String(a.Name||a.name||'').localeCompare(String(b.Name||b.name||'')))
      .map(product=>{
        const id=product.ID||product.id;
        const name=product.Name||product.name;
        return `<option value="${attr(id)}">${escapeHTML(name)}</option>`;
      })
      .join('');

  if([...el.options].some(option=>option.value===String(selected||''))){
    el.value=String(selected||'');
  }else{
    el.value='';
  }
}

async function ensureProductsLoaded(){
  if(Array.isArray(state.products)&&state.products.length)return state.products;

  try{
    const products=await GstarAPI.list('products');
    state.products=Array.isArray(products)?products:[];
  }catch(error){
    console.warn('Could not load products for Resource dropdown.',error);
    state.products=[];
  }

  return state.products;
}

function populateResourceSelect(){
  const el=byId('rExisting');
  if(!el)return;
  const selected=el.value;
  el.innerHTML='<option value="">+ New Resource</option>'+
    state.resources
      .slice()
      .sort((a,b)=>String(a.Title||'').localeCompare(String(b.Title||'')))
      .map(r=>`<option value="${attr(r.ID)}">${escapeHTML(r.Title||'Untitled Resource')}</option>`)
      .join('');
  if([...el.options].some(option=>option.value===selected))el.value=selected;
}

function clearResourceForm(){
  rId.value='';
  rName.value='';
  rCategory.value='Price List';
  rType.value='PDF';
  rUrl.value='';
  rProduct.value='';
  rStatus.value='Published';
  rDesc.value='';
  resourceModalTitle.textContent='Add Resource';
  renderHubChecks([]);
}

function selectExistingResource(id){
  if(!id){
    clearResourceForm();
    return;
  }
  const resource=state.resources.find(item=>item.ID===id);
  if(resource)fillResourceForm(resource);
}

function fillResourceForm(resource){
  resourceModalTitle.textContent='Edit Resource';
  rId.value=resource.ID||'';
  rName.value=resource.Title||'';
  rCategory.value=resource.Category||'Price List';
  rType.value=resource.Type||'PDF';
  rUrl.value=resource.URL||'';
  populateProductSelect(resource.ProductID||resource.productId||'');
  rStatus.value=resource.Status||'Published';
  rDesc.value=resource.Description||'';
  renderHubChecks(resource.Hubs||[]);
}

function renderHubChecks(selectedHubs=[]){
  const category=rCategory.value||'Price List';
  const allowed=resourceHubRules[category]||[];
  hubChecks.innerHTML=hubs.map(h=>{
    const supported=allowed.includes(h);
    const checked=supported&&selectedHubs.includes(h);
    const icon=h==='Marketing'?'megaphone':h==='Sales'?'package':h==='Support'?'bell':h==='Knowledge'?'database':'resource';
    return `<label class="hub-check" style="${supported?'':'opacity:.42'}" title="${supported?'Available for this resource category':'Not supported for '+category}">
      <input type="checkbox" value="${h}" ${checked?'checked':''} ${supported?'':'disabled'}>
      <span data-m-icon="${icon}"></span>${h}
      ${supported?'':'<small style="display:block">Not supported</small>'}
    </label>`;
  }).join('');
  applyManagementIcons();
}

function openProductModal(id){const p=id?state.products.find(x=>x.ID===id):null;byId('productModalTitle').textContent=p?'Edit Product':'Add Product';pId.value=p?.ID||'';pName.value=p?.Name||'';pCategory.value=p?.Category||'';pTagline.value=p?.Tagline||'';pLogo.value=p?.Logo||'';pDeveloper.value=p?.Developer||'';pDesc.value=p?.Description||'';pVersion.value=p?.CurrentVersion||'';pDownload.value=p?.DownloadURL||'';pTrialScript.value=p?.TrialScriptURL||'';pPlatform.value=p?.Platform||'';pLicense.value=p?.License||'';pWebsite.value=p?.WebsiteURL||'';pStatus.value=p?.Status||'Active';versionList.innerHTML='';versionHistory(p?.ID).forEach(v=>addVersionRow({version:v.Version,url:v.DownloadURL,platform:v.Platform,id:v.ID}));if(!p)addVersionRow();productPreview.style.display='none';showModal('productModal')}
function addVersionRow(v={version:'',url:'',platform:'Windows',id:''}){const row=document.createElement('div');row.className='version-row';row.dataset.versionId=v.id||'';row.innerHTML=`<input class="mg-input v-version" placeholder="2026 SP4" value="${attr(v.version)}"><input class="mg-input v-url" placeholder="Download URL" value="${attr(v.url)}"><input class="mg-input v-platform" placeholder="Windows" value="${attr(v.platform)}"><button class="mini-action" onclick="this.parentElement.remove()" type="button" aria-label="Delete version"><span data-m-icon="close"></span></button>`;versionList.appendChild(row);applyManagementIcons()}
async function saveProduct(){
  const editingId=pId.value;
  const payload={Name:pName.value.trim(),Category:pCategory.value,Tagline:pTagline.value.trim(),Logo:pLogo.value.trim(),Developer:pDeveloper.value.trim(),Description:pDesc.value.trim(),CurrentVersion:pVersion.value.trim(),DownloadURL:pDownload.value.trim(),TrialScriptURL:pTrialScript.value.trim(),Platform:pPlatform.value.trim(),License:pLicense.value.trim(),WebsiteURL:pWebsite.value.trim(),Status:pStatus.value,OpenTicketURL:'https://cs.applicadthai.com/'};
  if(!payload.Name){flash('Please enter Product Name',true);return}
  setBusy(true);
  try{
    const saved=editingId?await GstarAPI.update('products',editingId,payload):await GstarAPI.create('products',payload);
    const productId=saved.ID;
    const existing=state.versions.filter(v=>v.ProductID===productId);
    await Promise.all(existing.map(v=>GstarAPI.remove('versions',v.ID)));
    const rows=[...document.querySelectorAll('.version-row')].map(r=>({ProductID:productId,Version:r.querySelector('.v-version').value.trim(),DownloadURL:r.querySelector('.v-url').value.trim(),Platform:r.querySelector('.v-platform').value.trim(),IsCurrent:false})).filter(v=>v.Version||v.DownloadURL);
    for(const row of rows)await GstarAPI.create('versions',row);
    logLocal(`${editingId?'Updated':'Added'} product: ${payload.Name}`);closeModal('productModal');await loadData();flash('Product saved to Google Sheet');
  }catch(error){console.error(error);flash(error.message,true)}finally{setBusy(false)}
}
function previewProduct(){
  productPreview.style.display='block';
  productPreview.innerHTML=`
    <h3>${escapeHTML(pName.value||'Product Name')}</h3>
    <p>${escapeHTML(pDesc.value||'Description')}</p>
    <div class="resource-meta">
      <span class="soft-tag">${escapeHTML(pVersion.value||'Version')}</span>
      <span class="soft-tag gray">${escapeHTML(pPlatform.value||'Platform')}</span>
      <span class="soft-tag gray">${escapeHTML(pLicense.value||'License')}</span>
      <span class="soft-tag ${pDownload.value.trim()?'green':'gray'}">Free Trial ${pDownload.value.trim()?'Ready':'Missing'}</span>
      <span class="soft-tag ${pTrialScript.value.trim()?'green':'gray'}">Trial + Script ${pTrialScript.value.trim()?'Ready':'Missing'}</span>
    </div>`;
}
async function deleteProduct(id){if(!confirm('Delete this product?'))return;setBusy(true);try{for(const v of state.versions.filter(x=>x.ProductID===id))await GstarAPI.remove('versions',v.ID);await GstarAPI.remove('products',id);logLocal('Deleted product');await loadData();flash('Product deleted')}catch(error){flash(error.message,true)}finally{setBusy(false)}}

async function openResourceModal(id){
  await ensureProductsLoaded();
  populateProductSelect();
  populateResourceSelect();

  if(id){
    rExisting.value=id;
    selectExistingResource(id);
    populateProductSelect(rProduct.value);
  }else{
    rExisting.value='';
    clearResourceForm();
    populateProductSelect('');
  }

  showModal('resourceModal');
}

async function saveResource(){const id=rId.value;const payload={Title:rName.value.trim(),Category:rCategory.value,Type:rType.value,URL:rUrl.value.trim(),ProductID:rProduct.value.trim(),Status:rStatus.value,Description:rDesc.value.trim(),Hubs:[...hubChecks.querySelectorAll('input:checked')].map(x=>x.value)};if(!payload.Title){flash('Please enter Resource Name',true);return}setBusy(true);try{id?await GstarAPI.update('resources',id,payload):await GstarAPI.create('resources',payload);logLocal(`${id?'Updated':'Added'} resource: ${payload.Title}`);closeModal('resourceModal');await loadData();flash('Resource saved to Google Sheet')}catch(error){flash(error.message,true)}finally{setBusy(false)}}

function openAnnouncementModal(id){const a=id?state.announcements.find(x=>x.ID===id):null;aId.value=a?.ID||'';aTitle.value=a?.Title||'';aPriority.value=a?.Priority||'Normal';aDesc.value=a?.Description||'';aUrl.value=a?.ButtonURL||'';aStatus.value=a?.Status||'Published';showModal('announcementModal')}
async function saveAnnouncement(){const id=aId.value;const payload={Title:aTitle.value.trim(),Priority:aPriority.value,Description:aDesc.value.trim(),ButtonURL:aUrl.value.trim(),Status:aStatus.value,Pinned:false};if(!payload.Title){flash('Please enter announcement title',true);return}setBusy(true);try{id?await GstarAPI.update('announcements',id,payload):await GstarAPI.create('announcements',payload);logLocal(`${id?'Updated':'Added'} announcement: ${payload.Title}`);closeModal('announcementModal');await loadData();flash('Announcement saved')}catch(error){flash(error.message,true)}finally{setBusy(false)}}
async function deleteAnnouncement(id){if(!confirm('Delete this announcement?'))return;setBusy(true);try{await GstarAPI.remove('announcements',id);logLocal('Deleted announcement');await loadData();flash('Announcement deleted')}catch(error){flash(error.message,true)}finally{setBusy(false)}}

function showModal(id){byId(id).classList.add('show');applyManagementIcons()}
function closeModal(id){byId(id).classList.remove('show')}
function copyLink(btn,text){navigator.clipboard?.writeText(text||'');const old=btn.innerHTML;btn.innerHTML='<span data-m-icon="check"></span>Copied';btn.classList.add('copy-flash');applyManagementIcons();setTimeout(()=>{btn.innerHTML=old;btn.classList.remove('copy-flash');applyManagementIcons()},1200)}
function openUrl(url){if(url&&url!=='#')window.open(url,'_blank','noopener')}

document.addEventListener('DOMContentLoaded',async()=>{
  applyManagementIcons();
  document.querySelectorAll('.mg-tab').forEach(b=>b.addEventListener('click',()=>setSection(b.dataset.section)));
  byId('globalSearch')?.addEventListener('input',renderAll);
  byId('rExisting')?.addEventListener('change',event=>selectExistingResource(event.target.value));
  byId('rCategory')?.addEventListener('change',()=>renderHubChecks(
    [...hubChecks.querySelectorAll('input:checked')].map(input=>input.value)
  ));
  await loadData();
});
