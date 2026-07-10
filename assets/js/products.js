(() => {
  window.GSTAR_PRODUCTS_V5 = true;

  const DEFAULTS = [
    ["gstarcad","GstarCAD","CAD","assets/img/products/GstarCAD.png","Professional CAD Platform","2027 SP0","Windows / macOS","Perpetual / Subscription","https://www.gstarcad.net/"],
    ["gstarcad-architecture","GstarCAD Architecture","CAD","assets/img/products/GstarCAD-Architecture.png","Architecture CAD Solution","2027 SP0","Windows","Perpetual / Subscription","https://www.gstarcad.net/"],
    ["gstarcad-mechanical","GstarCAD Mechanical","CAD","assets/img/products/GstarCAD-Mechanical.png","Mechanical Design CAD","2027 SP0","Windows","Perpetual / Subscription","https://www.gstarcad.net/"],
    ["solidworks","SolidWorks","Partners","assets/img/products/SolidWorks.png","3D CAD Design Platform","2026","Windows","Subscription","https://www.solidworks.com/"],
    ["gstarbim","GstarBIM","BIM","assets/img/products/GstarBIM.png","BIM Design Workspace","2026","Windows","Perpetual / Subscription","https://www.thaigstarcad.com/gstarbim"],
    ["extraxion","ExtrAXION","BOQ & Estimation","assets/img/products/ExtrAXION.png","BOQ & Estimation Software","Latest","Windows","Subscription","https://www.thaigstarcad.com/"],
    ["gstarcad-365","GstarCAD 365","Viewer & Collaboration","assets/img/products/GstarCAD-365.png","Cloud CAD Collaboration","Latest","Web / Mobile","Subscription","https://www.gstarcad.net/"],
    ["3d-fastview","3D FastView","Viewer & Collaboration","assets/img/products/3D-Fastview.png","3D Viewer & Collaboration","Latest","Windows / Web / Mobile","Subscription","https://www.3dfastview.com/"],
    ["cadprofi","CADProfi","Add-ons","assets/img/products/CADProfi.png","CAD Add-on Library","Latest","Windows","Perpetual / Subscription","https://www.cadprofi.com/"],
    ["formlabs","FormLabs","3D Printing","assets/img/products/FormLabs.png","Professional 3D Printing","Latest","Hardware / Software","Hardware / Subscription","https://formlabs.com/"]
  ].map(x=>({
    id:x[0],name:x[1],category:x[2],logo:x[3],tagline:x[4],description:x[4],
    currentVersion:x[5],platform:x[6],license:x[7],website:x[8],
    downloadURL:x[8],trialScriptURL:"",openTicketURL:"https://cs.applicadthai.com/",status:"Active"
  }));

  const CATEGORIES=["All","CAD","BIM","BOQ & Estimation","Viewer & Collaboration","Add-ons","3D Printing","Partners"];
  let products=[...DEFAULTS];
  let activeCategory="All";
  let expandedProductId=null;

  const byId=id=>document.getElementById(id);
  const safe=v=>String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  const slug=v=>String(v||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

  function normalizeLogo(value,fallback){
    if(!value)return fallback;
    const path=String(value).trim();
    if(/^https?:\/\//i.test(path)||path.startsWith("assets/"))return path;
    if(path.startsWith("product/"))return `assets/img/products/${path.split("/").pop()}`;
    return `assets/img/products/${path.split("/").pop()}`;
  }

  function normalizeCategory(value,fallback){
    const raw=String(value||fallback||"").trim().toLowerCase();
    const map={
      "cad":"CAD","bim":"BIM","boq-estimation":"BOQ & Estimation",
      "boq & estimation":"BOQ & Estimation","viewer-collaboration":"Viewer & Collaboration",
      "viewer & collaboration":"Viewer & Collaboration","addons":"Add-ons","add-ons":"Add-ons",
      "3d-printing":"3D Printing","3d printing":"3D Printing","partners":"Partners"
    };
    return map[raw]||value||fallback||"Partners";
  }

  function mergeApi(apiRows){
    if(!Array.isArray(apiRows)||!apiRows.length)return [...DEFAULTS];

    const defaultsById=new Map(DEFAULTS.map(p=>[p.id,p]));
    const defaultsByName=new Map(DEFAULTS.map(p=>[p.name.toLowerCase(),p]));
    const merged=[];
    const used=new Set();

    apiRows.forEach(row=>{
      if(String(row.Status||"Active").toLowerCase()==="hidden")return;
      const match=defaultsById.get(String(row.ID||row.id||""))||defaultsByName.get(String(row.Name||"").toLowerCase());
      const base=match||{
        id:String(row.ID||slug(row.Name)),
        name:row.Name||"Untitled Product",
        category:"Partners",
        logo:"",
        tagline:row.Description||"",
        description:row.Description||"",
        currentVersion:"",
        platform:"",
        license:"",
        website:"#",
        downloadURL:"#",
        trialScriptURL:"",
        openTicketURL:"https://cs.applicadthai.com/",
        status:"Active"
      };
      const item={
        ...base,
        id:String(row.ID||base.id),
        name:row.Name||base.name,
        category:normalizeCategory(row.Category,base.category),
        logo:normalizeLogo(row.Logo,base.logo),
        tagline:row.Tagline||row.Description||base.tagline,
        description:row.Description||base.description,
        currentVersion:row.CurrentVersion||base.currentVersion,
        platform:row.Platform||base.platform,
        license:row.License||base.license,
        website:row.WebsiteURL||base.website,
        downloadURL:row.DownloadURL||base.downloadURL||"",
        trialScriptURL:row.TrialScriptURL||base.trialScriptURL||"",
        openTicketURL:row.OpenTicketURL||base.openTicketURL,
        status:row.Status||base.status
      };
      merged.push(item);
      used.add(base.id);
    });

    DEFAULTS.forEach(item=>{if(!used.has(item.id))merged.push(item)});
    return merged;
  }

  async function loadProducts(){
    const groups=byId("productGroups");
    if(groups)groups.innerHTML='<div class="card"><strong>Loading products...</strong><p>Syncing with Control Tower</p></div>';
    try{
      const data=await GstarAPI.bootstrap();
      products=mergeApi(data.products||[]);
    }catch(error){
      console.warn("Product API unavailable; using built-in products.",error);
      products=[...DEFAULTS];
    }
    render();
  }

  function actions(p){
    return [
      {title:"Download Free Trial",url:p.downloadURL||""},
      {title:"Download Trial + Script",url:p.trialScriptURL||""},
      {title:"Open Ticket",url:p.openTicketURL||"https://cs.applicadthai.com/"},
      {title:"Open Website",url:p.website||""}
    ];
  }

  async function copyUrl(url,button){
    if(!url||url==="#"){
      const old=button.innerHTML;
      button.innerHTML="No link";
      setTimeout(()=>button.innerHTML=old,1200);
      return;
    }
    try{await navigator.clipboard.writeText(url)}
    catch{
      const area=document.createElement("textarea");area.value=url;document.body.appendChild(area);
      area.select();document.execCommand("copy");area.remove();
    }
    const old=button.innerHTML;
    button.innerHTML="✓ Copied";
    setTimeout(()=>button.innerHTML=old,1200);
  }

  function card(p){
    const expanded=p.id===expandedProductId;
    const initials=p.name.split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase();
    return `
      <article class="product-card-v5 ${expanded?"expanded":""}" data-product-id="${safe(p.id)}" tabindex="0" aria-expanded="${expanded}">
        <div class="product-logo-shell">
          <img class="product-logo-v5" src="${safe(p.logo)}" alt="${safe(p.name)} logo"
            onerror="this.outerHTML='<div class=&quot;initial-logo&quot;>${safe(initials)}</div>'">
        </div>
        <h3>${safe(p.name)}</h3>
        <p>${safe(p.tagline||p.description)}</p>
        <div class="product-open-hint">${expanded?"Close Workspace ↑":"Open Workspace →"}</div>
        <div class="product-expanded-body">
          <div class="v5-block-title">Quick Actions</div>
          <div class="quick-action-list">
            ${actions(p).map(a=>`
              <div class="quick-action-card">
                <div class="quick-action-title">${safe(a.title)}</div>
                <button class="quick-action-btn" type="button" data-open-url="${safe(a.url)}">Open</button>
                <button class="quick-action-btn" type="button" data-copy-url="${safe(a.url)}">Copy</button>
              </div>`).join("")}
          </div>
          <div class="v5-block-title">Overview</div>
          <div class="overview-grid-v5">
            <div class="overview-item-v5"><span>Current Version</span><strong>${safe(p.currentVersion||"-")}</strong></div>
            <div class="overview-item-v5"><span>Platform</span><strong>${safe(p.platform||"-")}</strong></div>
            <div class="overview-item-v5"><span>License</span><strong>${safe(p.license||"-")}</strong></div>
            <div class="overview-item-v5"><span>Official Website</span><strong>${safe(p.website||"-")}</strong></div>
          </div>
        </div>
      </article>`;
  }

  function render(){
    const tabs=byId("categoryTabs"),groups=byId("productGroups"),search=byId("productSearch");
    if(!tabs||!groups)return;
    if(!tabs.dataset.readyV5){
      tabs.innerHTML=CATEGORIES.map(c=>`<button class="tab ${c===activeCategory?"active":""}" data-category="${safe(c)}">${safe(c)}</button>`).join("");
      tabs.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
        activeCategory=btn.dataset.category;expandedProductId=null;
        tabs.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===btn));render();
      }));
      search?.addEventListener("input",()=>{expandedProductId=null;render()});
      tabs.dataset.readyV5="1";
    }
    const q=(search?.value||"").trim().toLowerCase();
    const list=products.filter(p=>(activeCategory==="All"||p.category===activeCategory)&&`${p.name} ${p.category} ${p.tagline} ${p.description}`.toLowerCase().includes(q));
    groups.innerHTML=list.length?`
      <div class="section-head"><div><div class="section-title">${safe(activeCategory==="All"?"All Products":activeCategory)}</div><div class="section-desc">${list.length} products · click a card to open workspace actions</div></div></div>
      <div class="product-grid-v5">${list.map(card).join("")}</div>`
      :'<div class="card">No products found.</div>';

    groups.querySelectorAll(".product-card-v5").forEach(item=>{
      const toggle=()=>{expandedProductId=expandedProductId===item.dataset.productId?null:item.dataset.productId;render()};
      item.addEventListener("click",e=>{if(!e.target.closest("button"))toggle()});
      item.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle()}});
    });
    groups.querySelectorAll("[data-open-url]").forEach(btn=>btn.addEventListener("click",e=>{
      e.stopPropagation();
      const url=btn.dataset.openUrl;
      if(url&&url!=="#"){
        window.open(url,"_blank","noopener");
      }else{
        const old=btn.innerHTML;
        btn.innerHTML="No link";
        setTimeout(()=>btn.innerHTML=old,1200);
      }
    }));
    groups.querySelectorAll("[data-copy-url]").forEach(btn=>btn.addEventListener("click",e=>{
      e.stopPropagation();copyUrl(btn.dataset.copyUrl,btn);
    }));
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",loadProducts,{once:true});
  else loadProducts();
})();
