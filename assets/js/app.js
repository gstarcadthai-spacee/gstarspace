const MANAGEMENT_PASSWORD='gstar2026';
const icons={search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path></svg>',package:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>',megaphone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3Z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>',briefcase:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"></path><path d="M3 7h18v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7Z"></path><path d="M3 13h18"></path></svg>',headset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13a9 9 0 1 1 18 0"></path><path d="M5 13h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"></path><path d="M19 13h-3v6h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"></path><path d="M16 19a4 4 0 0 1-4 3"></path></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 7v14"></path><path d="M3 5a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3v15a3 3 0 0 0-3-3H5a2 2 0 0 0-2 2V5Z"></path><path d="M21 5a2 2 0 0 0-2-2h-4a3 3 0 0 0-3 3v15a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2V5Z"></path></svg>',bot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"></path><rect x="4" y="8" width="16" height="12" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M9 13v2"></path><path d="M15 13v2"></path><path d="M9 18h6"></path></svg>'};
const productDefaults=[
{id:'gstarcad',name:'GstarCAD',category:'CAD',description:'Professional CAD Platform',logo:'GstarCAD.png',status:'Active',url:'#',enabled:true,external:false,keywords:'cad dwg drafting'},
{id:'gstarcad-architecture',name:'GstarCAD Architecture',category:'CAD',description:'Architecture CAD Solution',logo:'GstarCAD-Architecture.png',status:'Active',url:'#',enabled:true,external:false,keywords:'architecture cad'},
{id:'gstarcad-mechanical',name:'GstarCAD Mechanical',category:'CAD',description:'Mechanical Design CAD',logo:'GstarCAD-Mechanical.png',status:'Active',url:'#',enabled:true,external:false,keywords:'mechanical cad'},
{id:'solidworks',name:'SolidWorks',category:'CAD',description:'3D CAD Design Platform',logo:'SolidWorks.png',status:'External',url:'https://www.8baht.com/',enabled:true,external:true,keywords:'solidworks 3d cad'},
{id:'gstarbim',name:'GstarBIM',category:'BIM',description:'BIM Design Workspace',logo:'GstarBIM.png',status:'Growth',url:'#',enabled:true,external:false,keywords:'bim'},
{id:'extraxion',name:'ExtrAXION',category:'BOQ & Estimation',description:'BOQ & Estimation Software',logo:'ExtrAXION.png',status:'Active',url:'#',enabled:true,external:false,keywords:'boq estimation construction'},
{id:'gstarcad365',name:'GstarCAD 365',category:'Viewer & Collaboration',description:'Cloud CAD Collaboration',logo:'GstarCAD-365.png',status:'Active',url:'#',enabled:true,external:false,keywords:'cloud collaboration'},
{id:'3d-fastview',name:'3D FastView',category:'Viewer & Collaboration',description:'3D Viewer & Collaboration',logo:'3D-Fastview.png',status:'Active',url:'#',enabled:true,external:false,keywords:'viewer 3d'},
{id:'cadprofi',name:'CADProfi',category:'Add-ons',description:'CAD Add-on Library',logo:'CADProfi.png',status:'Active',url:'#',enabled:true,external:false,keywords:'addon library'},
{id:'formlabs',name:'Formlabs',category:'3D Printing',description:'Professional 3D Printing',logo:'FormLabs.png',status:'Partner',url:'#',enabled:true,external:true,keywords:'3d printing'}
];
const announcementDefaults=[
{id:'a1',title:'GstarCAD 2027 resources added',description:'Sales and marketing materials are now available.',status:'Active',date:'Today',pinned:true,enabled:true},
{id:'a2',title:'GstarBIM launch kit updated',description:'Internal deck and messaging have been revised.',status:'Updated',date:'Yesterday',pinned:false,enabled:true},
{id:'a3',title:'Management console ready',description:'Admin console mockup is ready for review.',status:'Active',date:'This week',pinned:false,enabled:true}
];
function getProducts(){return JSON.parse(localStorage.getItem('gstar_products_v2')||'null')||productDefaults}
function setProducts(v){localStorage.setItem('gstar_products_v2',JSON.stringify(v))}
function getAnnouncements(){return JSON.parse(localStorage.getItem('gstar_announcements_v2')||'null')||announcementDefaults}
function setAnnouncements(v){localStorage.setItem('gstar_announcements_v2',JSON.stringify(v))}
function applyIcons(){document.querySelectorAll('[data-icon]').forEach(el=>{if(icons[el.dataset.icon])el.innerHTML=icons[el.dataset.icon]})}
function imgPath(file){return `assets/img/products/${file}`}
function initBell(){const b=document.getElementById('bellButton'),p=document.getElementById('notificationPanel');if(!b||!p)return;b.onclick=e=>{e.stopPropagation();p.classList.toggle('show')};document.addEventListener('click',e=>{if(!p.contains(e.target)&&!b.contains(e.target))p.classList.remove('show')})}
function renderNotifications(){const p=document.getElementById('notificationItems');if(p)p.innerHTML=getAnnouncements().filter(a=>a.enabled).slice(0,4).map(a=>`<div class="list-item"><div><strong>${a.title}</strong><span>${a.date}</span></div></div>`).join('')}
function initSearch(){const input=document.getElementById('globalSearch'),results=document.getElementById('globalSearchResults');if(!input||!results)return;const pages=[['Dashboard','Workspace home','index.html'],['Products','Product portfolio','products.html'],['Marketing Hub','Brand and campaign assets','marketing.html'],['Sales Hub','Price list and proposal','sales.html'],['Support Hub','Technical FAQ','support.html'],['Knowledge Base','Internal wiki','knowledge.html'],['AI Assistant','Workspace AI','ai-assistant.html'],['Management','Admin console','management-login.html']];input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();if(!q){results.classList.remove('show');return}const productResults=getProducts().map(p=>[p.name,`${p.category} · ${p.description}`,'products.html']);const found=[...pages,...productResults].filter(x=>`${x[0]} ${x[1]}`.toLowerCase().includes(q)).slice(0,8);results.innerHTML=found.length?found.map(x=>`<a class="search-result" href="${x[2]}"><div><strong>${x[0]}</strong><br><small>${x[1]}</small></div></a>`).join(''):'<div class="search-result">No results</div>';results.classList.add('show')});document.addEventListener('click',e=>{if(!results.contains(e.target)&&e.target!==input)results.classList.remove('show')})}
function initLogin(){const form=document.getElementById('managementLoginForm');if(!form)return;form.onsubmit=e=>{e.preventDefault();const pw=document.getElementById('managementPassword').value.trim();if(pw===MANAGEMENT_PASSWORD){sessionStorage.setItem('gstar_admin','1');location.href='Gstar-Management.html'}else document.getElementById('managementError').classList.add('show')}}
function logoutManagement(){sessionStorage.removeItem('gstar_admin');location.href='management-login.html'}
function guardAdmin(){if(document.body.dataset.admin==='true'&&sessionStorage.getItem('gstar_admin')!=='1')location.href='management-login.html'}
function renderDashboard(){const box=document.getElementById('dashboardAnnouncements');if(!box)return;box.innerHTML=getAnnouncements().filter(a=>a.enabled).slice(0,3).map(a=>`<div class="list-item"><div><strong>${a.title}</strong><span>${a.description}</span></div><span class="tag ${a.status==='Active'?'blue':''}">${a.status}</span></div>`).join('')}
function renderProducts(){const tabs=document.getElementById('categoryTabs'),groups=document.getElementById('productGroups'),search=document.getElementById('productSearch');if(!tabs||!groups)return;const active=getProducts().filter(p=>p.enabled);const cats=['All','CAD','BIM','BOQ & Estimation','Viewer & Collaboration','Add-ons','3D Printing','Partners'];if(!tabs.dataset.ready){tabs.innerHTML=cats.map(c=>`<button class="tab ${c==='All'?'active':''}" data-cat="${c}">${c}</button>`).join('');tabs.dataset.ready='1';tabs.querySelectorAll('button').forEach(b=>b.onclick=()=>{tabs.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts()});if(search)search.oninput=renderProducts}
const cat=tabs.querySelector('.active')?.dataset.cat||'All';const q=(search?.value||'').toLowerCase();let items=active.filter(p=>(cat==='All'||p.category===cat||(cat==='Partners'&&p.external))&&`${p.name} ${p.category} ${p.description} ${p.keywords||''}`.toLowerCase().includes(q));if(!items.length){groups.innerHTML='<div class="card">No products found.</div>';return}groups.innerHTML=`<div><div class="section-head"><div><div class="section-title">${cat==='All'?'All Products':cat}</div><div class="section-desc">${items.length} products</div></div></div><div class="product-grid">${items.map(p=>`<a class="card product-card" href="${p.url||'#'}"><img src="${imgPath(p.logo)}" alt="${p.name}" onerror="this.outerHTML='<div class=&quot;initial-logo&quot;>${p.name.slice(0,2)}</div>'"><h3>${p.name}</h3><p>${p.description}</p><span class="tag blue">${p.category}</span></a>`).join('')}</div></div>`}
function initAdmin(){const root=document.getElementById('adminRoot');if(!root)return;renderAdmin();document.querySelectorAll('.admin-rail button').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.admin-rail button').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.admin-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById(btn.dataset.panel).classList.add('active')});document.getElementById('newProductBtn')?.addEventListener('click',()=>openProductModal());document.getElementById('newAnnouncementBtn')?.addEventListener('click',()=>openAnnouncementModal());document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show')));document.getElementById('productForm')?.addEventListener('submit',saveProduct);document.getElementById('announcementForm')?.addEventListener('submit',saveAnnouncement);document.getElementById('resetDemoBtn')?.addEventListener('click',()=>{localStorage.removeItem('gstar_products_v2');localStorage.removeItem('gstar_announcements_v2');renderAdmin();toast('Demo data reset')})}
function renderAdmin(){const products=getProducts(),ann=getAnnouncements();document.getElementById('statProducts').textContent=products.length;document.getElementById('statAnnouncements').textContent=ann.length;document.getElementById('statActive').textContent=products.filter(p=>p.enabled).length;document.getElementById('statCategories').textContent=new Set(products.map(p=>p.category)).size;renderAdminProducts();renderAdminAnnouncements();renderPreview()}
function renderAdminProducts(){const tbody=document.getElementById('productTable');if(!tbody)return;tbody.innerHTML=getProducts().map(p=>`<tr><td><div class="row-title">${p.name}</div><div class="row-sub">${p.description}</div></td><td>${p.category}</td><td><span class="tag ${p.enabled?'green':'orange'}">${p.enabled?'Active':'Hidden'}</span></td><td>${p.status}</td><td><div class="row-actions"><button class="mini-btn" onclick="openProductModal('${p.id}')">Edit</button><button class="mini-btn" onclick="toggleProduct('${p.id}')">${p.enabled?'Hide':'Show'}</button><button class="mini-btn danger" onclick="deleteProduct('${p.id}')">Delete</button></div></td></tr>`).join('')}
function renderAdminAnnouncements(){const tbody=document.getElementById('announcementTable');if(!tbody)return;tbody.innerHTML=getAnnouncements().map(a=>`<tr><td><div class="row-title">${a.title}</div><div class="row-sub">${a.description}</div></td><td>${a.date}</td><td><span class="tag ${a.enabled?'green':'orange'}">${a.enabled?'Active':'Hidden'}</span></td><td>${a.pinned?'Pinned':'Normal'}</td><td><div class="row-actions"><button class="mini-btn" onclick="openAnnouncementModal('${a.id}')">Edit</button><button class="mini-btn" onclick="toggleAnnouncement('${a.id}')">${a.enabled?'Hide':'Show'}</button><button class="mini-btn danger" onclick="deleteAnnouncement('${a.id}')">Delete</button></div></td></tr>`).join('')}
function renderPreview(){const box=document.getElementById('notificationPreview');if(box)box.innerHTML=getAnnouncements().filter(a=>a.enabled).slice(0,3).map(a=>`<div class="list-item"><div><strong>${a.title}</strong><span>${a.date}</span></div></div>`).join('')}
function openProductModal(id){const p=getProducts().find(x=>x.id===id)||{};productId.value=p.id||'';productName.value=p.name||'';productCategory.value=p.category||'CAD';productLogo.value=p.logo||'';productStatus.value=p.status||'Active';productUrl.value=p.url||'#';productDescription.value=p.description||'';productKeywords.value=p.keywords||'';productEnabled.checked=p.enabled!==false;productExternal.checked=!!p.external;productModal.classList.add('show')}
function saveProduct(e){e.preventDefault();let arr=getProducts();const id=productId.value||productName.value.toLowerCase().replace(/[^a-z0-9]+/g,'-');const p={id,name:productName.value,category:productCategory.value,logo:productLogo.value,status:productStatus.value,url:productUrl.value,description:productDescription.value,keywords:productKeywords.value,enabled:productEnabled.checked,external:productExternal.checked};arr=arr.filter(x=>x.id!==id);arr.push(p);setProducts(arr);productModal.classList.remove('show');renderAdmin();toast('Product saved')}
function toggleProduct(id){setProducts(getProducts().map(p=>p.id===id?{...p,enabled:!p.enabled}:p));renderAdmin()}
function deleteProduct(id){if(confirm('Delete this product?')){setProducts(getProducts().filter(p=>p.id!==id));renderAdmin()}}
function openAnnouncementModal(id){const a=getAnnouncements().find(x=>x.id===id)||{};announcementId.value=a.id||'';announcementTitle.value=a.title||'';announcementDescription.value=a.description||'';announcementDate.value=a.date||'';announcementStatus.value=a.status||'Active';announcementPinned.checked=!!a.pinned;announcementEnabled.checked=a.enabled!==false;announcementModal.classList.add('show')}
function saveAnnouncement(e){e.preventDefault();let arr=getAnnouncements();const id=announcementId.value||Date.now().toString();const a={id,title:announcementTitle.value,description:announcementDescription.value,date:announcementDate.value,status:announcementStatus.value,pinned:announcementPinned.checked,enabled:announcementEnabled.checked};arr=arr.filter(x=>x.id!==id);arr.push(a);setAnnouncements(arr);announcementModal.classList.remove('show');renderAdmin();toast('Announcement saved')}
function toggleAnnouncement(id){setAnnouncements(getAnnouncements().map(a=>a.id===id?{...a,enabled:!a.enabled}:a));renderAdmin()}
function deleteAnnouncement(id){if(confirm('Delete this announcement?')){setAnnouncements(getAnnouncements().filter(a=>a.id!==id));renderAdmin()}}
function toast(msg){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
document.addEventListener('DOMContentLoaded',()=>{applyIcons();guardAdmin();renderNotifications();renderDashboard();renderProducts();initBell();initSearch();initLogin();initAdmin()});

/* Products V5 override — scoped to products.html only */
const productOverviewDefaults={
  gstarcad:{version:'2027 SP0',developer:'Gstarsoft',platform:'Windows / macOS',license:'Perpetual / Subscription',website:'Official Website'},
  'gstarcad-architecture':{version:'2027',developer:'Gstarsoft',platform:'Windows',license:'Perpetual / Subscription',website:'Official Website'},
  'gstarcad-mechanical':{version:'2027',developer:'Gstarsoft',platform:'Windows',license:'Perpetual / Subscription',website:'Official Website'},
  solidworks:{version:'Current',developer:'Dassault Systèmes',platform:'Windows',license:'Subscription',website:'Official Website'},
  gstarbim:{version:'Current',developer:'Gstarsoft',platform:'Windows',license:'Subscription / Perpetual',website:'Official Website'},
  extraxion:{version:'Current',developer:'AppliCAD',platform:'Windows',license:'Project / Commercial',website:'Official Website'},
  gstarcad365:{version:'Current',developer:'Gstarsoft',platform:'Web / Cloud',license:'Subscription',website:'Official Website'},
  '3d-fastview':{version:'Current',developer:'Gstarsoft',platform:'Windows / Web / Mobile',license:'Subscription',website:'Official Website'},
  cadprofi:{version:'Current',developer:'CADProfi',platform:'Windows',license:'Perpetual / Subscription',website:'Official Website'},
  formlabs:{version:'Current',developer:'Formlabs',platform:'Hardware / Cloud',license:'Partner',website:'Official Website'}
};
const productActionDefaults={
  gstarcad:[
    ['Download Free Trial','https://www.gstarcad.net/download/'],
    ['Download Trial + Script','#'],
    ['Open Ticket','#'],
    ['LINE Hotline','#']
  ],
  gstarbim:[['Download Free Trial','#'],['Download Trial + Script','#'],['Open Ticket','#'],['LINE Hotline','#']],
  extraxion:[['Open Product Page','#'],['Open Ticket','#'],['LINE Hotline','#']],
  default:[['Download Free Trial','#'],['Download Trial + Script','#'],['Open Ticket','#'],['LINE Hotline','#']]
};
function productOverview(p){return p.overview||productOverviewDefaults[p.id]||{version:p.version||'Current',developer:p.developer||'—',platform:p.platform||'Windows',license:p.license||p.status||'Active',website:'Official Website'}}
function productActions(p){return (p.actions&&p.actions.length?p.actions:productActionDefaults[p.id]||productActionDefaults.default).map(a=>Array.isArray(a)?{title:a[0],url:a[1]}:a)}
function productLogoHtml(p){const primary=imgPath(p.logo);const fallback=`product/${p.logo}`;const initials=(p.name||'PR').split(/\s+/).map(w=>w[0]).join('').slice(0,2);return `<img class="product-logo-v5" src="${primary}" alt="${p.name}" data-fallback-src="${fallback}" data-initials="${initials}" onerror="if(!this.dataset.usedFallback){this.dataset.usedFallback='1';this.src=this.dataset.fallbackSrc}else{this.outerHTML='<div class=&quot;initial-logo&quot;>'+this.dataset.initials+'</div>'}">`}
function normalizeProductUrl(url){return url&&url!=='#'?url:'#'}
function showV5Toast(message='✓ Copied'){let t=document.getElementById('v5Toast');if(!t){t=document.createElement('div');t.id='v5Toast';t.className='v5-toast';document.body.appendChild(t)}t.textContent=message;t.classList.add('show');clearTimeout(window.__v5ToastTimer);window.__v5ToastTimer=setTimeout(()=>t.classList.remove('show'),1800)}
async function copyProductUrl(url){try{await navigator.clipboard.writeText(url);showV5Toast('✓ Copied')}catch(e){showV5Toast('Copy failed')}}
function openProductUrl(url){if(!url||url==='#'){showV5Toast('Link not added yet');return}window.open(url,'_blank','noopener')}
function renderProducts(){
  const tabs=document.getElementById('categoryTabs'),groups=document.getElementById('productGroups'),search=document.getElementById('productSearch');
  if(!tabs||!groups)return;
  groups.classList.add('v5');
  const allProducts=getProducts().filter(p=>p.enabled!==false);
  const categories=['All','CAD','BIM','BOQ & Estimation','Viewer & Collaboration','Add-ons','3D Printing','Partners'];
  if(!tabs.dataset.v5Ready){
    tabs.innerHTML=categories.map(c=>`<button class="tab ${c==='All'?'active':''}" data-cat="${c}">${c}</button>`).join('');
    tabs.dataset.v5Ready='1';
    tabs.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{tabs.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');window.__productsV5Expanded=null;renderProducts()}));
    if(search)search.addEventListener('input',()=>{window.__productsV5Expanded=null;renderProducts()});
  }
  const activeCat=tabs.querySelector('.tab.active')?.dataset.cat||'All';
  const q=(search?.value||'').trim().toLowerCase();
  const filtered=allProducts.filter(p=>{
    const catMatch=activeCat==='All'||p.category===activeCat||(activeCat==='Partners'&&(p.category==='Partners'||p.external));
    const text=`${p.name} ${p.category} ${p.description} ${p.keywords||''} ${p.developer||''}`.toLowerCase();
    return catMatch && (!q||text.includes(q));
  });
  if(!filtered.length){groups.innerHTML=`<div class="empty-products-v5"><strong>No products found</strong><br><span>Try another keyword or category.</span></div>`;return;}
  groups.innerHTML=`<div class="section-head"><div><div class="section-title">${activeCat==='All'?'All Products':activeCat}</div><div class="section-desc">${filtered.length} products · click a card to open workspace actions</div></div></div><div class="product-grid-v5">${filtered.map(renderProductCardV5).join('')}</div>`;
  groups.querySelectorAll('.product-card-v5').forEach(card=>{
    card.addEventListener('click',e=>{
      if(e.target.closest('button'))return;
      const id=card.dataset.id;
      window.__productsV5Expanded=window.__productsV5Expanded===id?null:id;
      renderProducts();
    });
  });
  groups.querySelectorAll('[data-open-url]').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();openProductUrl(btn.dataset.openUrl)}));
  groups.querySelectorAll('[data-copy-url]').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();copyProductUrl(btn.dataset.copyUrl)}));
}
function renderProductCardV5(p){
  const expanded=window.__productsV5Expanded===p.id;
  const overview=productOverview(p);
  const actions=productActions(p);
  const primaryUrl=normalizeProductUrl(p.url);
  const overviewRows=[['Current Version',overview.version],['Developer',overview.developer],['Platform',overview.platform],['License',overview.license],['Official Website',overview.website]];
  return `<article class="product-card-v5 ${expanded?'expanded':''}" data-id="${p.id}" tabindex="0" role="button" aria-expanded="${expanded}">
    <div class="product-logo-shell">${productLogoHtml(p)}</div>
    <h3>${p.name}</h3>
    <p>${p.description||''}</p>
    <div class="product-open-hint">Open Workspace →</div>
    <div class="product-expanded-body">
      <div class="v5-block-title">Quick Actions</div>
      <div class="quick-action-list">
        ${actions.map(a=>`<div class="quick-action-card"><div class="quick-action-title">${a.title}</div><button class="quick-action-btn" type="button" data-open-url="${a.url||primaryUrl}">Open</button><button class="quick-action-btn" type="button" data-copy-url="${a.url||primaryUrl}">Copy</button></div>`).join('')}
      </div>
      <div class="v5-block-title">Overview</div>
      <div class="overview-grid-v5">${overviewRows.map(([k,v])=>`<div class="overview-item-v5"><span>${k}</span><strong>${v||'—'}</strong></div>`).join('')}</div>
    </div>
  </article>`
}
