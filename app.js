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
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://www.gstarcad.net/download/" },
      { icon: "📥", title: "Download Trial + Script", url: "https://www.gstarcad.net/download/" },
      { icon: "💬", title: "Open Ticket", url: "https://www.thaigstarcad.com/" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
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
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://www.gstarcad.net/download/" },
      { icon: "📥", title: "Download Trial + Script", url: "https://www.gstarcad.net/download/" },
      { icon: "💬", title: "Open Ticket", url: "https://www.thaigstarcad.com/" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
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
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://www.gstarcad.net/download/" },
      { icon: "📥", title: "Download Trial + Script", url: "https://www.gstarcad.net/download/" },
      { icon: "💬", title: "Open Ticket", url: "https://www.thaigstarcad.com/" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
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
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://www.solidworks.com/" },
      { icon: "📥", title: "Download Trial + Script", url: "https://www.solidworks.com/" },
      { icon: "💬", title: "Open Ticket", url: "https://www.solidworks.com/" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
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
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://www.thaigstarcad.com/gstarbim" },
      { icon: "📥", title: "Download Trial + Script", url: "https://www.thaigstarcad.com/gstarbim" },
      { icon: "💬", title: "Open Ticket", url: "https://www.thaigstarcad.com/gstarbim" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
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
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://www.thaigstarcad.com/" },
      { icon: "📥", title: "Download Trial + Script", url: "https://www.thaigstarcad.com/" },
      { icon: "💬", title: "Open Ticket", url: "https://www.thaigstarcad.com/" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
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
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://www.gstarcad.net/" },
      { icon: "📥", title: "Download Trial + Script", url: "https://www.gstarcad.net/" },
      { icon: "💬", title: "Open Ticket", url: "https://www.thaigstarcad.com/" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
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
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://www.3dfastview.com/" },
      { icon: "📥", title: "Download Trial + Script", url: "https://www.3dfastview.com/" },
      { icon: "💬", title: "Open Ticket", url: "https://www.3dfastview.com/" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
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
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://www.cadprofi.com/" },
      { icon: "📥", title: "Download Trial + Script", url: "https://www.cadprofi.com/" },
      { icon: "💬", title: "Open Ticket", url: "https://www.cadprofi.com/" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
  },
  {
    id: "formlabs",
    name: "Formlabs",
    category: "3d-printing",
    logo: "product/FormLabs.png",
    tagline: "Professional 3D Printing",
    overview: {
      "Current Version": "Latest",
      "Developer": "Formlabs",
      "Platform": "Hardware / Software",
      "License": "Hardware / Subscription",
      "Official Website": "https://formlabs.com/"
    },
    actions: [
      { icon: "📥", title: "Download Trial", url: "https://formlabs.com/" },
      { icon: "📥", title: "Download Trial + Script", url: "https://formlabs.com/" },
      { icon: "💬", title: "Open Ticket", url: "https://formlabs.com/" },
      { icon: "🟢", title: "LINE Hotline", url: "https://line.me/" }
    ]
  }
];

let activeCategory = "all";
let searchTerm = "";
let expandedProductId = null;

const filterRoot = document.getElementById("categoryFilters");
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("productSearch");
const emptyState = document.getElementById("emptyState");
const toast = document.getElementById("toast");

function init() {
  renderFilters();
  renderProducts();

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
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

    const searchMatch = !searchTerm || searchableText.includes(searchTerm);
    return categoryMatch && searchMatch;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  emptyState.hidden = filtered.length > 0;

  grid.innerHTML = filtered.map(product => createProductCard(product)).join("");

  grid.querySelectorAll(".card-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const productId = trigger.dataset.productId;
      expandedProductId = expandedProductId === productId ? null : productId;
      renderProducts();
    });
  });

  grid.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.closest(".logo-wrap").classList.add("logo-missing");
    });
  });

  grid.querySelectorAll(".copy-button").forEach(button => {
    button.addEventListener("click", () => copyUrl(button.dataset.url));
  });
}

function createProductCard(product) {
  const isExpanded = product.id === expandedProductId;
  const initials = product.name.split(" ").map(word => word[0]).join("").slice(0, 3).toUpperCase();

  return `
    <article class="product-card ${isExpanded ? "expanded" : ""}">
      <div class="product-card-inner">
        <button class="card-trigger" data-product-id="${product.id}" aria-expanded="${isExpanded}">
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
            <p class="section-title">Quick Actions</p>
            <div class="action-list">
              ${product.actions.map(action => `
                <div class="action-card">
                  <div class="action-title"><span>${action.icon}</span>${action.title}</div>
                  <div class="action-buttons">
                    <a href="${action.url}" target="_blank" rel="noopener">Open</a>
                    <button class="copy-button" type="button" data-url="${action.url}">Copy</button>
                  </div>
                </div>
              `).join("")}
            </div>

            <p class="section-title">Overview</p>
            <div class="overview-list">
              ${Object.entries(product.overview).map(([label, value]) => {
                if (label === "Official Website") {
                  return `
                    <div class="overview-item">
                      <span>${label}</span>
                      <span><a class="website-link" href="${value}" target="_blank" rel="noopener">Open →</a></span>
                    </div>
                  `;
                }
                return `
                  <div class="overview-item">
                    <span>${label}</span>
                    <span>${value}</span>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

async function copyUrl(url) {
  try {
    await navigator.clipboard.writeText(url);
    showToast("✓ Copied");
  } catch (error) {
    const tempInput = document.createElement("input");
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    tempInput.remove();
    showToast("✓ Copied");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

init();
