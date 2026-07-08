const MANAGEMENT_PASSWORD = "gstar2026";
const USE_APPS_SCRIPT = false;
const APPS_SCRIPT_URL = "";

const defaultProducts = [
  { id:"gstarcad", name:"GstarCAD", category:"CAD", image:"GstarCAD.png", url:"#", description:"2D CAD Software", enabled:true, external:false, status:"Core" },
  { id:"gstarcad-architecture", name:"GstarCAD Architecture", category:"CAD", image:"GstarCAD-Architecture.png", url:"#", description:"Architecture CAD solution", enabled:true, external:false, status:"CAD" },
  { id:"gstarcad-mechanical", name:"GstarCAD Mechanical", category:"CAD", image:"GstarCAD-Mechanical.png", url:"#", description:"Mechanical CAD solution", enabled:true, external:false, status:"CAD" },
  { id:"solidworks", name:"SolidWorks", category:"CAD", image:"SolidWorks.jpg", url:"https://www.8baht.com/", description:"CAD partner solution", enabled:true, external:true, status:"External" },
  { id:"gstarbim", name:"GstarBIM", category:"BIM", image:"GstarBIM.png", url:"#", description:"BIM transition platform", enabled:true, external:false, status:"Growth" },
  { id:"gstarcad-365", name:"GstarCAD 365", category:"Viewer & Collaboration", image:"GstarCAD-365.png", url:"#", description:"Cloud & collaboration workflow", enabled:true, external:false, status:"Active" },
  { id:"3d-fastview", name:"3D FastView", category:"Viewer & Collaboration", image:"3D-Fastview.png", url:"#", description:"3D viewer & collaboration", enabled:true, external:false, status:"Viewer" },
  { id:"cadprofi", name:"CADProfi", category:"Add-ons", image:"CADProfi.png", url:"#", description:"Industry add-on tools", enabled:true, external:false, status:"Add-on" },
  { id:"extraxion", name:"ExtraXION", category:"Manufacturing", image:"ExtraXION.png", url:"#", description:"Manufacturing solution", enabled:true, external:false, status:"Active" },
  { id:"formlabs", name:"FormLabs", category:"3D Printing", image:"FormLabs.png", url:"#", description:"3D printing solution", enabled:true, external:true, status:"Partner" }
];

const defaultAnnouncements = [
  {id:"a1", title:"GstarCAD 2027 Sales Kit Updated", description:"Sales Kit และ Marketing Materials ได้รับการอัปเดตล่าสุด", date:"8 Jul 2026", enabled:true},
  {id:"a2", title:"GstarBIM Launch Resources", description:"เพิ่มไฟล์ Webinar, Sales Deck และ Landing Page", date:"7 Jul 2026", enabled:true},
  {id:"a3", title:"Workspace Management", description:"เปิดใช้งานระบบ Management Console สำหรับผู้ดูแลระบบ", date:"6 Jul 2026", enabled:true}
];

const icons = {
  search:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path></svg>',
  package:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m7.5 4.3 9 5.2"></path><path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>',
  megaphone:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3Z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>',
  briefcase:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect x="2" y="7" width="20" height="14" rx="2"></rect></svg>',
  headset:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 11a9 9 0 0 1 18 0"></path><path d="M21 17v1a2 2 0 0 1-2 2h-3"></path><path d="M3 13h3v6H5a2 2 0 0 1-2-2v-4Z"></path><path d="M18 13h3v4a2 2 0 0 1-2 2h-1v-6Z"></path></svg>',
  'book-open':'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z"></path></svg>',
  bot:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>'
};

function applyIcons(){document.querySelectorAll('[data-icon]').forEach(el=>{const n=el.dataset.icon;if(icons[n])el.innerHTML=icons[n];});}
function normalizeProduct(p){return {...p, enabled:p.enabled!==false, external:!!p.external, status:p.status || (p.external?'External':'Active')};}
function getProducts(){try{const saved=JSON.parse(localStorage.getItem('gstar_products'));return Array.isArray(saved)&&saved.length?saved.map(normalizeProduct):defaultProducts}catch{return defaultProducts}}
function setProducts(v){localStorage.setItem('gstar_products',JSON.stringify(v))}
function getAnnouncements(){try{return JSON.parse(localStorage.getItem('gstar_announcements'))||defaultAnnouncements}catch{return defaultAnnouncements}}
function setAnnouncements(v){localStorage.setItem('gstar_announcements',JSON.stringify(v))}
function imgPath(file){return `assets/img/products/${file}`}
function rootImgPath(file){return `assets/img/${file}`}
function activeProducts(){return getProducts().filter(p=>p.enabled)}
function productCategories(){return ['All',...new Set(activeProducts().map(p=>p.category).filter(Boolean))]}

function renderProductTabs(){
  const tabs=document.getElementById('categoryTabs');
  if(!tabs)return;
  const old=document.querySelector('.tab.active')?.dataset.category||'All';
  const cats=productCategories();
  const current=cats.includes(old)?old:'All';
  tabs.innerHTML=cats.map(c=>`<button class="tab ${c===current?'active':''}" data-category="${c}">${c} <span>${c==='All'?activeProducts().length:activeProducts().filter(p=>p.category===c).length}</span></button>`).join('');
  tabs.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{tabs.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts(false);});
}
function renderProducts(rebuildTabs=true){
  const box=document.getElementById('productGroups');
  if(!box)return;
  if(rebuildTabs)renderProductTabs();
  const q=(document.getElementById('productSearch')?.value||'').toLowerCase().trim();
  const current=document.querySelector('.tab.active')?.dataset.category||'All';
  const items=activeProducts().filter(p=>(current==='All'||p.category===current)&&`${p.name} ${p.category} ${p.description} ${p.status}`.toLowerCase().includes(q));
  if(!items.length){box.innerHTML='<div class="empty-state">No products found.</div>';return}
  box.innerHTML=`<div class="product-summary"><h3>${current==='All'?'Product Portfolio':current}</h3><span>${items.length} products</span></div><div class="product-grid">${items.map(productCard).join('')}</div>`;
  bindProductImageFallbacks();
}
function productCard(p){
  const target=p.external?'target="_blank" rel="noopener"':'';
  const safeName=(p.name||'Product').replace(/"/g,'&quot;');
  return `<a class="product-card" href="${p.url||'#'}" ${target} data-product-id="${p.id}">
    ${p.external?'<span class="external-mark">↗</span>':''}
    <div class="product-logo-wrap"><img class="product-logo" src="${imgPath(p.image)}" data-fallback="${rootImgPath(p.image)}" alt="${safeName}"></div>
    <div><h3>${p.name}</h3><p>${p.description||''}</p></div>
    <div class="product-meta"><span class="tag blue">${p.category}</span><span class="tag">${p.status||'Active'}</span></div>
  </a>`;
}
function bindProductImageFallbacks(){
  document.querySelectorAll('.product-logo').forEach(img=>{
    img.addEventListener('error',function handleError(){
      const fallback=this.dataset.fallback;
      if(fallback && this.src.indexOf('/products/')>-1){this.src=fallback;return;}
      const name=this.alt||'G';
      this.parentElement.innerHTML=`<div class="logo-fallback">${name.charAt(0).toUpperCase()}</div>`;
    },{once:false});
  });
}

function renderAnnouncements(){
  const items=getAnnouncements().filter(a=>a.enabled);
  const dash=document.getElementById('dashboardAnnouncements');
  if(dash)dash.innerHTML=items.map(a=>`<div class="list-item"><div><strong>${a.title}</strong><span>${a.description}</span><span>${a.date||''}</span></div><span class="tag blue">Active</span></div>`).join('');
  const panel=document.getElementById('notificationItems');
  if(panel)panel.innerHTML=items.slice(0,4).map(a=>`<div class="list-item"><div><strong>${a.title}</strong><span>${a.date||''}</span></div></div>`).join('');
}
function initBell(){const b=document.getElementById('bellButton'),p=document.getElementById('notificationPanel');if(!b||!p)return;b.onclick=e=>{e.stopPropagation();p.classList.toggle('show')};document.addEventListener('click',e=>{if(!p.contains(e.target)&&e.target!==b)p.classList.remove('show')});}
function initSearch(){
  const input=document.getElementById('globalSearch'),results=document.getElementById('globalSearchResults');if(!input||!results)return;
  const base=[{title:'Dashboard',desc:'Workspace home',url:'index.html'},{title:'Products',desc:'Product portfolio',url:'products.html'},{title:'Marketing Hub',desc:'Campaign and brand assets',url:'marketing.html'},{title:'Sales Hub',desc:'Price list and proposal',url:'sales.html'},{title:'Support Hub',desc:'License and FAQ',url:'support.html'},{title:'Knowledge Base',desc:'How-to and training',url:'knowledge.html'},{title:'AI Assistant',desc:'Workspace AI',url:'ai-assistant.html'}];
  input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();if(!q){results.classList.remove('show');return}const products=activeProducts().map(p=>({title:p.name,desc:`${p.category} · ${p.description}`,url:p.url||'products.html'}));const all=[...base,...products];const found=all.filter(x=>`${x.title} ${x.desc}`.toLowerCase().includes(q)).slice(0,8);results.innerHTML=found.length?found.map(x=>`<a class="search-result" href="${x.url}"><div class="icon-badge"><span data-icon="search"></span></div><div><strong>${x.title}</strong><br><small>${x.desc}</small></div></a>`).join(''):'<div class="search-result"><div>No results</div></div>';results.classList.add('show');applyIcons();});
  document.addEventListener('click',e=>{if(!results.contains(e.target)&&e.target!==input)results.classList.remove('show')});
}
function initLogin(){const form=document.getElementById('managementLoginForm');if(!form)return;form.onsubmit=e=>{e.preventDefault();const val=document.getElementById('managementPassword').value;const err=document.getElementById('managementError');if(val===MANAGEMENT_PASSWORD){localStorage.setItem('gstar_management_auth','1');location.href='Gstar-Management.html'}else err.classList.add('show')};}
function logoutManagement(){localStorage.removeItem('gstar_management_auth');location.href='management-login.html'}
function initAdmin(){if(!document.getElementById('adminProducts'))return;if(localStorage.getItem('gstar_management_auth')!=='1'){location.href='management-login.html';return}renderAdminProducts();renderAdminAnnouncements();bindAdminModals();}
function renderAdminProducts(){const box=document.getElementById('adminProducts');if(!box)return;box.innerHTML=getProducts().map(p=>`<div class="admin-row"><div><strong>${p.name}</strong><span>${p.category} · ${p.image} · ${p.enabled?'Enabled':'Disabled'}</span></div><div class="admin-row-actions"><button class="mini-btn" onclick="editProduct('${p.id}')">Edit</button><button class="mini-btn" onclick="toggleProduct('${p.id}')">${p.enabled?'Disable':'Enable'}</button><button class="mini-btn danger" onclick="deleteProduct('${p.id}')">Delete</button></div></div>`).join('')}
function renderAdminAnnouncements(){const box=document.getElementById('adminAnnouncements');if(!box)return;box.innerHTML=getAnnouncements().map(a=>`<div class="admin-row"><div><strong>${a.title}</strong><span>${a.date||''} · ${a.enabled?'Enabled':'Disabled'}</span></div><div class="admin-row-actions"><button class="mini-btn" onclick="editAnnouncement('${a.id}')">Edit</button><button class="mini-btn" onclick="toggleAnnouncement('${a.id}')">${a.enabled?'Disable':'Enable'}</button><button class="mini-btn danger" onclick="deleteAnnouncement('${a.id}')">Delete</button></div></div>`).join('')}
function bindAdminModals(){document.getElementById('addProductBtn')?.addEventListener('click',()=>openProductModal());document.getElementById('addAnnouncementBtn')?.addEventListener('click',()=>openAnnouncementModal());document.querySelectorAll('[data-close-modal]').forEach(b=>b.onclick=()=>document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show')));document.getElementById('productForm')?.addEventListener('submit',saveProduct);document.getElementById('announcementForm')?.addEventListener('submit',saveAnnouncement);}
function openProductModal(p=null){document.getElementById('productForm').reset();productId.value=p?.id||'';productName.value=p?.name||'';productCategory.value=p?.category||'';productImage.value=p?.image||'';productUrl.value=p?.url||'';productDescription.value=p?.description||'';productExternal.checked=!!p?.external;productEnabled.checked=p?.enabled!==false;productModal.classList.add('show')}
function editProduct(id){openProductModal(getProducts().find(p=>p.id===id))}
function saveProduct(e){e.preventDefault();let arr=getProducts();let id=productId.value||productName.value.toLowerCase().replace(/[^a-z0-9]+/g,'-');const p={id,name:productName.value,category:productCategory.value,image:productImage.value,url:productUrl.value||'#',description:productDescription.value,external:productExternal.checked,enabled:productEnabled.checked,status:productExternal.checked?'External':'Active'};arr=arr.filter(x=>x.id!==id);arr.push(p);setProducts(arr);productModal.classList.remove('show');renderAdminProducts();renderProducts();}
function toggleProduct(id){setProducts(getProducts().map(p=>p.id===id?{...p,enabled:!p.enabled}:p));renderAdminProducts();renderProducts()}
function deleteProduct(id){if(confirm('Delete this product?')){setProducts(getProducts().filter(p=>p.id!==id));renderAdminProducts();renderProducts()}}
function openAnnouncementModal(a=null){announcementForm.reset();announcementId.value=a?.id||'';announcementTitle.value=a?.title||'';announcementDescription.value=a?.description||'';announcementDate.value=a?.date||'';announcementEnabled.checked=a?.enabled!==false;announcementModal.classList.add('show')}
function editAnnouncement(id){openAnnouncementModal(getAnnouncements().find(a=>a.id===id))}
function saveAnnouncement(e){e.preventDefault();let arr=getAnnouncements();let id=announcementId.value||Date.now().toString();const a={id,title:announcementTitle.value,description:announcementDescription.value,date:announcementDate.value,enabled:announcementEnabled.checked};arr=arr.filter(x=>x.id!==id);arr.push(a);setAnnouncements(arr);announcementModal.classList.remove('show');renderAdminAnnouncements();renderAnnouncements()}
function toggleAnnouncement(id){setAnnouncements(getAnnouncements().map(a=>a.id===id?{...a,enabled:!a.enabled}:a));renderAdminAnnouncements();renderAnnouncements()}
function deleteAnnouncement(id){if(confirm('Delete this announcement?')){setAnnouncements(getAnnouncements().filter(a=>a.id!==id));renderAdminAnnouncements();renderAnnouncements()}}

document.addEventListener('DOMContentLoaded',()=>{applyIcons();renderAnnouncements();initBell();initSearch();initLogin();initAdmin();renderProducts();document.getElementById('productSearch')?.addEventListener('input',()=>renderProducts(false));});
