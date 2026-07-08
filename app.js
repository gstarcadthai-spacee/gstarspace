const categories = [
  { id: "all", label: "All" },
  { id: "cad", label: "CAD" },
  { id: "bim", label: "BIM" },
  { id: "boq-estimation", label: "BOQ & Estimation" },
  { id: "viewer-collaboration", label: "Viewer & Collaboration" },
  { id: "addons", label: "Add-ons" },
  { id: "3d-printing", label: "3D Printing" },
  { id: "partners", label: "Partners" }
];

const products = [
  {
    id: "gstarcad",
    name: "GstarCAD",
    category: "cad",
    logo: "product/GstarCAD.png",
    tagline: "Professional CAD Platform",
    overview: {
      "Current Version": "2027 SP0",
      "Developer": "Gstarsoft",
      "Platform": "Windows / macOS",
      "License": "Perpetual / Subscription",
      "Official Website": "https://www.gstarcad.net/"
    }
  },
  {
    id: "gstarcad-architecture",
    name: "GstarCAD Architecture",
    category: "cad",
    logo: "product/GstarCAD-Architecture.png",
    tagline: "Architecture CAD Solution",
    overview: {
      "Current Version": "2027 SP0",
      "Developer": "Gstarsoft",
      "Platform": "Windows",
      "License": "Perpetual / Subscription",
      "Official Website": "https://www.gstarcad.net/"
    }
  },
  {
    id: "gstarcad-mechanical",
    name: "GstarCAD Mechanical",
    category: "cad",
    logo: "product/GstarCAD-Mechanical.png",
    tagline: "Mechanical Design CAD",
    overview: {
      "Current Version": "2027 SP0",
      "Developer": "Gstarsoft",
      "Platform": "Windows",
      "License": "Perpetual / Subscription",
      "Official Website": "https://www.gstarcad.net/"
    }
  },
  {
    id: "solidworks",
    name: "SolidWorks",
    category: "cad",
    logo: "product/SolidWorks.png",
    tagline: "3D CAD Design Platform",
    overview: {
      "Current Version": "2026",
      "Developer": "Dassault Systèmes",
      "Platform": "Windows",
      "License": "Subscription",
      "Official Website": "https://www.solidworks.com/"
    }
  },
  {
    id: "gstarbim",
    name: "GstarBIM",
    category: "bim",
    logo: "product/GstarBIM.png",
    tagline: "BIM Design Workspace",
    overview: {
      "Current Version": "2026",
      "Developer": "Gstarsoft",
      "Platform": "Windows",
      "License": "Perpetual / Subscription",
      "Official Website": "https://www.thaigstarcad.com/gstarbim"
    }
  },
  {
    id: "extraxion",
    name: "ExtrAXION",
    category: "boq-estimation",
    logo: "product/ExtrAXION.png",
    tagline: "BOQ & Estimation Software",
    overview: {
      "Current Version": "Latest",
      "Developer": "ExtrAXION",
      "Platform": "Windows",
      "License": "Subscription",
      "Official Website": "https://www.thaigstarcad.com/"
    }
  },
  {
    id: "gstarcad-365",
    name: "GstarCAD 365",
    category: "viewer-collaboration",
    logo: "product/GstarCAD-365.png",
    tagline: "Cloud CAD Collaboration",
    overview: {
      "Current Version": "Latest",
      "Developer": "Gstarsoft",
      "Platform": "Web / Mobile",
      "License": "Subscription",
      "Official Website": "https://www.gstarcad.net/"
    }
  },
  {
    id: "3d-fastview",
    name: "3D FastView",
    category: "viewer-collaboration",
    logo: "product/3D-Fastview.png",
    tagline: "3D Viewer & Collaboration",
    overview: {
      "Current Version": "Latest",
      "Developer": "Gstarsoft",
      "Platform": "Windows / Web / Mobile",
      "License": "Subscription",
      "Official Website": "https://www.3dfastview.com/"
    }
  },
  {
    id: "cadprofi",
    name: "CADProfi",
    category: "addons",
    logo: "product/CADProfi.png",
    tagline: "CAD Add-on Library",
    overview: {
      "Current Version": "Latest",
      "Developer": "CADProfi",
      "Platform": "Windows",
      "License": "Perpetual / Subscription",
      "Official Website": "https://www.cadprofi.com/"
    }
  },
  {
    id: "formlabs",
    name: "FormLabs",
    category: "3d-printing",
    logo: "product/FormLabs.png",
    tagline: "Professional 3D Printing",
    overview: {
      "Current Version": "Latest",
      "Developer": "Formlabs",
      "Platform": "Hardware / Software",
      "License": "Hardware / Subscription",
      "Official Website": "https://formlabs.com/"
    }
  }
].map(product => ({
  ...product,
  actions: [
    { icon: "📥", title: "Download Trial", url: product.overview["Official Website"] },
    { icon: "📥", title: "Download Trial + Script", url: product.overview["Official Website"] },
    { icon: "💬", title: "Open Ticket", url: "https://www.thaigstarcad.com/" },
    { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
  ]
}));

let activeCategory = "all";
let searchTerm = "";
let expandedProductId = null;

const filterRoot = document.getElementById("categoryFilters");
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("productSearch");
const emptyState = document.getElementById("emptyState");
const toast = document.getElementById("toast");
const directoryTitle = document.getElementById("directoryTitle");
const productCount = document.getElementById("productCount");

if (filterRoot && grid && searchInput) initProducts();

function initProducts() {
  renderFilters();
  renderProducts();
  searchInput.addEventListener("input", event => {
    searchTerm = event.target.value.trim().toLowerCase();
    expandedProductId = null;
    renderProducts();
  });
}

function renderFilters() {
  filterRoot.innerHTML = categories.map(category => `
    <button class="filter-pill ${category.id === activeCategory ? "active" : ""}" data-category="${category.id}">
      ${category.label}
    </button>
  `).join("");

  filterRoot.querySelectorAll(".filter-pill").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      expandedProductId = null;
      renderFilters();
      renderProducts();
    });
  });
}

function getFilteredProducts() {
  return products.filter(product => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const searchableText = [
      product.name,
      product.tagline,
      product.category,
      product.overview.Developer,
      product.overview.Platform,
      product.overview.License
    ].join(" ").toLowerCase();
    return categoryMatch && searchableText.includes(searchTerm);
  });
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  const activeLabel = categories.find(category => category.id === activeCategory)?.label || "All";

  directoryTitle.textContent = activeCategory === "all" ? "All Products" : activeLabel;
  productCount.textContent = `${visibleProducts.length} product${visibleProducts.length === 1 ? "" : "s"}`;
  emptyState.hidden = visibleProducts.length > 0;

  grid.innerHTML = visibleProducts.map(product => productCard(product)).join("");

  grid.querySelectorAll(".card-trigger").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.closest(".product-card").dataset.id;
      expandedProductId = expandedProductId === id ? null : id;
      renderProducts();
    });
  });

  grid.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      copyToClipboard(button.dataset.url);
    });
  });

  grid.querySelectorAll(".logo-wrap img").forEach(img => {
    img.addEventListener("error", () => img.parentElement.classList.add("logo-missing"));
  });
}

function productCard(product) {
  const isExpanded = expandedProductId === product.id;
  const initials = product.name.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase();
  return `
    <article class="product-card ${isExpanded ? "expanded" : ""}" data-id="${product.id}">
      <div class="product-card-inner">
        <button class="card-trigger" type="button" aria-expanded="${isExpanded}">
          <div>
            <div class="logo-wrap">
              <img src="${product.logo}" alt="${product.name} logo" loading="lazy" />
              <span class="logo-fallback">${initials}</span>
            </div>
            <h3>${product.name}</h3>
            <p class="tagline">${product.tagline}</p>
            <span class="open-hint">Open Workspace →</span>
          </div>
        </button>
        <div class="expand-content">
          <div>
            <div class="expand-divider"></div>
            <h4 class="mini-title">Quick Actions</h4>
            <div class="action-list">
              ${product.actions.map(action => `
                <div class="action-card">
                  <div class="action-title"><span>${action.icon}</span><strong>${action.title}</strong></div>
                  <div class="action-buttons">
                    <a href="${action.url}" target="_blank" rel="noopener">Open</a>
                    <button class="copy-btn" type="button" data-url="${action.url}">Copy</button>
                  </div>
                </div>
              `).join("")}
            </div>
            <h4 class="mini-title">Overview</h4>
            <div class="overview-list">
              ${Object.entries(product.overview).map(([label, value]) => `
                <div class="overview-item">
                  <span>${label}</span>
                  <span>${label === "Official Website" ? `<a class="website-link" href="${value}" target="_blank" rel="noopener">Open →</a>` : value}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  showToast();
}

function showToast() {
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 1800);
}


/* === Gstar Mobile Drawer Fix v3 === */
function initMobileDrawer(){
  const topbar=document.querySelector('.topbar');
  const sidebar=document.querySelector('.sidebar');
  if(!topbar||!sidebar)return;

  // Clean old duplicated drawer layers/buttons from previous builds.
  document.querySelectorAll('.mobile-drawer-backdrop').forEach((el,i)=>{ if(i>0) el.remove(); });
  document.querySelectorAll('.mobile-menu-btn').forEach((el,i)=>{ if(i>0) el.remove(); });

  let btn=document.querySelector('.mobile-menu-btn');
  if(!btn){
    btn=document.createElement('button');
    btn.className='mobile-menu-btn';
    btn.type='button';
    btn.setAttribute('aria-label','Open navigation');
    btn.innerHTML='<span></span>';
    topbar.prepend(btn);
  }

  let backdrop=document.querySelector('.mobile-drawer-backdrop');
  if(!backdrop){
    backdrop=document.createElement('div');
    backdrop.className='mobile-drawer-backdrop';
    document.body.appendChild(backdrop);
  }

  const close=()=>{
    document.body.classList.remove('mobile-nav-open');
    btn.setAttribute('aria-label','Open navigation');
    backdrop.style.pointerEvents='none';
    backdrop.style.visibility='hidden';
    backdrop.style.display='none';
  };
  const open=()=>{
    document.body.classList.add('mobile-nav-open');
    btn.setAttribute('aria-label','Close navigation');
    backdrop.style.display='block';
    backdrop.style.visibility='visible';
    backdrop.style.pointerEvents='auto';
  };

  // Always start closed so no invisible overlay can block the page.
  close();

  btn.onclick=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.contains('mobile-nav-open')?close():open();
  };
  backdrop.onclick=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    close();
  };
  sidebar.querySelectorAll('a').forEach(a=>{ a.onclick=close; });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') close(); },{passive:true});
  window.addEventListener('pageshow',close,{once:true});
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initMobileDrawer,{once:true});}else{initMobileDrawer();}
