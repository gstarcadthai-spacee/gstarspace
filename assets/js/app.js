const MANAGEMENT_PASSWORD = "gstar2026";

const iconMap = {
  search: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>`,
  bell: `<svg viewBox="0 0 24 24"><path d="M10.27 21a2 2 0 0 0 3.46 0"></path><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path></svg>`,
  package: `<svg viewBox="0 0 24 24"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`,
  megaphone: `<svg viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3Z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>`,
  briefcase: `<svg viewBox="0 0 24 24"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>`,
  headset: `<svg viewBox="0 0 24 24"><path d="M3 11a9 9 0 0 1 18 0"></path><path d="M21 12v4a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M3 12v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>`,
  book: `<svg viewBox="0 0 24 24"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z"></path></svg>`,
  bot: `<svg viewBox="0 0 24 24"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>`,
  box: `<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`,
  layers: `<svg viewBox="0 0 24 24"><path d="m12 2 10 5-10 5L2 7Z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>`,
  monitor: `<svg viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>`,
  puzzle: `<svg viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.6-.22l-2.49 1a7.3 7.3 0 0 0-1.69-.98L14.5 2.42A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65c-.04.32-.07.65-.07.98s.02.66.07.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65a.5.5 0 0 0 .5.42h4a.5.5 0 0 0 .5-.42l.38-2.65c.61-.24 1.18-.56 1.69-.98l2.49 1a.5.5 0 0 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  factory: `<svg viewBox="0 0 24 24"><path d="M2 20h20"></path><path d="M4 20V8l6 4V8l6 4V4h4v16"></path><path d="M8 18v-2"></path><path d="M12 18v-2"></path><path d="M16 18v-2"></path></svg>`,
  printer: `<svg viewBox="0 0 24 24"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 14h12v8H6z"></path></svg>`,
  link: `<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  arrow: `<svg viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`
};

const workspaceSearchData = [
  { title: "Products", description: "Product Portfolio, CAD, BIM, Viewer, Add-ons และ Partner Solutions", url: "products.html", icon: "P", keywords: ["products", "product", "gstarcad", "gstarbim", "cadprofi", "3d fastview", "solidworks", "formlabs", "สินค้า", "ผลิตภัณฑ์"] },
  { title: "Marketing Hub", description: "Campaign, Brand Assets, Social Content และ Landing Page", url: "marketing.html", icon: "M", keywords: ["marketing", "campaign", "brand", "assets", "social", "line oa", "landing page", "การตลาด", "แคมเปญ"] },
  { title: "Sales Hub", description: "Price List, Proposal, Comparison และ Quote Support", url: "sales.html", icon: "S", keywords: ["sales", "price", "proposal", "comparison", "quote", "ขาย", "ราคา"] },
  { title: "Support Hub", description: "Installation, Activation, License, FAQ และ Troubleshooting", url: "support.html", icon: "T", keywords: ["support", "installation", "activation", "license", "faq", "ซัพพอร์ต", "ติดตั้ง"] },
  { title: "Knowledge Base", description: "How-to, Wiki, Training และ Internal Knowledge", url: "knowledge.html", icon: "K", keywords: ["knowledge", "wiki", "training", "guide", "คู่มือ", "บทความ"] },
  { title: "AI Assistant", description: "Workspace AI Prototype และ Internal Copilot", url: "ai-assistant.html", icon: "AI", keywords: ["ai", "assistant", "bot", "copilot", "prompt"] },
  { title: "Management", description: "Management Login, Resource Library และ Admin Console", url: "management-login.html", icon: "G", keywords: ["management", "admin", "console", "login", "จัดการ"] }
];

const productCategories = [
  { id: "all", label: "All", icon: "box" },
  { id: "CAD", label: "CAD", icon: "package" },
  { id: "BIM", label: "BIM", icon: "layers" },
  { id: "Viewer & Collaboration", label: "Viewer", icon: "monitor" },
  { id: "Add-ons", label: "Add-ons", icon: "puzzle" },
  { id: "Manufacturing", label: "Manufacturing", icon: "factory" },
  { id: "3D Printing", label: "3D Printing", icon: "printer" },
  { id: "Partner Solutions", label: "Partners", icon: "link" }
];

const productData = [
  { name: "GstarCAD", category: "CAD", image: "GstarCAD.png", description: "2D CAD สำหรับงานเขียนแบบ DWG และงาน Drafting หลักของทีม", status: "Active", enabled: true, external: false, url: "#", keywords: ["2d cad", "dwg", "drafting", "gstarcad"] },
  { name: "GstarCAD Mechanical", category: "CAD", image: "GstarCAD-Mechanical.png", description: "CAD สำหรับงาน Mechanical พร้อมเครื่องมือเฉพาะทางวิศวกรรม", status: "Active", enabled: true, external: false, url: "#", keywords: ["mechanical", "engineering", "cad"] },
  { name: "GstarCAD Architecture", category: "CAD", image: "GstarCAD-Architecture.png", description: "ชุดเครื่องมือสำหรับงานสถาปัตย์และ Building workflow", status: "Active", enabled: true, external: false, url: "#", keywords: ["architecture", "building", "cad"] },
  { name: "SolidWorks", category: "CAD", image: "SolidWorks.jpg", description: "3D CAD / Design solution ที่เกี่ยวข้องกับ Partner และทีมอื่น", status: "External", enabled: true, external: true, url: "https://www.8baht.com/", keywords: ["solidworks", "3d cad", "partner", "8baht"] },
  { name: "GstarBIM", category: "BIM", image: "GstarBIM.png", description: "BIM transition resources สำหรับทีมที่เริ่มจาก CAD ไปสู่ BIM", status: "Active", enabled: true, external: false, url: "#", keywords: ["bim", "ifc", "revit", "cad to bim"] },
  { name: "GstarCAD 365", category: "Viewer & Collaboration", image: "GstarCAD-365.png", description: "Cloud และ Collaboration workflow ใน ecosystem ของ GstarCAD", status: "Active", enabled: true, external: false, url: "#", keywords: ["365", "cloud", "collaboration"] },
  { name: "3D FastView", category: "Viewer & Collaboration", image: "3D-Fastview.png", description: "Viewer สำหรับเปิดดูและสื่อสารไฟล์ 3D ได้ง่ายขึ้น", status: "Active", enabled: true, external: false, url: "#", keywords: ["3d fastview", "viewer", "3d viewer"] },
  { name: "CADProfi", category: "Add-ons", image: "CADProfi.png", description: "Add-on สำหรับ Mechanical, Electrical, HVAC และ Architecture", status: "Active", enabled: true, external: false, url: "#", keywords: ["cadprofi", "add-on", "hvac", "electrical"] },
  { name: "ExtraXION", category: "Manufacturing", image: "ExtraXION.png", description: "Manufacturing workflow และทรัพยากรสำหรับงานผลิต", status: "Active", enabled: true, external: false, url: "#", keywords: ["extraxion", "manufacturing", "production"] },
  { name: "FormLabs", category: "3D Printing", image: "FormLabs.png", description: "3D Printing solution สำหรับ Printer workflow และงานต้นแบบ", status: "External", enabled: true, external: true, url: "https://www.8baht.com/", keywords: ["formlabs", "3d printing", "printer"] }
];

function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach(el => {
    const key = el.getAttribute("data-icon");
    if (iconMap[key]) el.innerHTML = iconMap[key];
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initManagementLogin() {
  const form = document.getElementById("managementLoginForm");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("managementPassword");
    const error = document.getElementById("managementError");
    const value = input ? input.value.trim() : "";
    if (value === MANAGEMENT_PASSWORD) {
      sessionStorage.setItem("gstarManagementAuth", "true");
      window.location.href = "Gstar-Management.html";
      return;
    }
    if (error) error.classList.add("show");
  });
}

function protectManagementPage() {
  const path = window.location.pathname.toLowerCase();
  if (!path.endsWith("gstar-management.html")) return;
  const isAuth = sessionStorage.getItem("gstarManagementAuth") === "true";
  if (!isAuth) window.location.href = "management-login.html";
}

function logoutManagement() {
  sessionStorage.removeItem("gstarManagementAuth");
  window.location.href = "management-login.html";
}
window.logoutManagement = logoutManagement;

function initWorkspaceSearch() {
  const input = document.getElementById("workspaceSearch");
  const results = document.getElementById("searchResults");
  if (!input || !results) return;

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      results.classList.remove("show");
      results.innerHTML = "";
      return;
    }

    const productSearchItems = productData.filter(p => p.enabled).map(p => ({
      title: p.name,
      description: `${p.category} · ${p.description}`,
      url: "products.html",
      icon: "P",
      keywords: [p.name, p.category, p.description, ...(p.keywords || [])]
    }));

    const matches = [...workspaceSearchData, ...productSearchItems].filter(item => {
      const haystack = [item.title, item.description, ...(item.keywords || [])].join(" ").toLowerCase();
      return haystack.includes(q);
    }).slice(0, 8);

    results.classList.add("show");
    if (!matches.length) {
      results.innerHTML = `<div class="search-empty">No results found for “${escapeHtml(query)}”</div>`;
      return;
    }

    results.innerHTML = matches.map(item => `
      <a class="search-result-item" href="${item.url}">
        <div class="search-result-icon">${escapeHtml(item.icon)}</div>
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.description)}</span>
        </div>
      </a>
    `).join("");
  }

  input.addEventListener("input", () => renderResults(input.value));
  input.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      input.value = "";
      renderResults("");
      input.blur();
    }
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".search-wrap")) results.classList.remove("show");
  });
}

function initNotifications() {
  const toggle = document.getElementById("notificationToggle");
  const panel = document.getElementById("notificationPanel");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", event => {
    event.stopPropagation();
    panel.classList.toggle("show");
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".notification-wrap")) panel.classList.remove("show");
  });
}

function productCard(product) {
  const isExternal = product.external;
  const safeName = escapeHtml(product.name);
  const safeCategory = escapeHtml(product.category);
  const safeDescription = escapeHtml(product.description);
  const imagePath = `assets/img/products/${product.image}`;
  const fallback = product.name.split(" ").map(word => word[0]).join("").slice(0, 3).toUpperCase();
  const statusClass = isExternal ? "external" : product.status.toLowerCase().includes("soon") ? "soon" : "";
  const cta = isExternal ? "Open External" : "Open Product";
  const target = isExternal ? " target=\"_blank\" rel=\"noopener\"" : "";

  return `
    <article class="product-card" data-category="${safeCategory}" data-search="${escapeHtml([product.name, product.category, product.description, ...(product.keywords || [])].join(" ").toLowerCase())}">
      <div class="product-logo" data-fallback="${fallback}">
        <img src="${imagePath}" alt="${safeName} logo" loading="lazy" onerror="this.remove();this.parentElement.classList.add('logo-missing')">
      </div>
      <div class="product-meta">
        <span class="tag blue">${safeCategory}</span>
        <span class="product-status ${statusClass}">${escapeHtml(product.status)}</span>
      </div>
      <h3>${safeName}</h3>
      <p>${safeDescription}</p>
      <a class="product-action" href="${escapeHtml(product.url)}"${target}>
        <span>${cta}</span>
        <span class="product-action-icon">${iconMap.arrow}</span>
      </a>
    </article>
  `;
}

function initProductsPage() {
  const directory = document.getElementById("productDirectory");
  const tabs = document.getElementById("productTabs");
  const input = document.getElementById("productSearch");
  const empty = document.getElementById("productEmpty");
  if (!directory || !tabs) return;

  let activeCategory = "all";
  let activeSearch = "";

  tabs.innerHTML = productCategories.map(cat => `
    <button type="button" class="product-tab ${cat.id === "all" ? "active" : ""}" data-category="${escapeHtml(cat.id)}">
      <span class="product-tab-icon">${iconMap[cat.icon] || ""}</span>
      <span>${escapeHtml(cat.label)}</span>
    </button>
  `).join("");

  function render() {
    const enabled = productData.filter(p => p.enabled);
    const filtered = enabled.filter(product => {
      const matchCategory = activeCategory === "all" || product.category === activeCategory;
      const haystack = [product.name, product.category, product.description, ...(product.keywords || [])].join(" ").toLowerCase();
      const matchSearch = !activeSearch || haystack.includes(activeSearch);
      return matchCategory && matchSearch;
    });

    const grouped = productCategories
      .filter(cat => cat.id !== "all")
      .map(cat => ({ ...cat, products: filtered.filter(p => p.category === cat.id) }))
      .filter(group => group.products.length > 0);

    if (!filtered.length) {
      directory.innerHTML = "";
      if (empty) empty.classList.add("show");
      return;
    }

    if (empty) empty.classList.remove("show");

    directory.innerHTML = grouped.map(group => `
      <div class="product-category-section">
        <div class="product-category-head">
          <div class="product-category-icon">${iconMap[group.icon] || iconMap.box}</div>
          <div>
            <h2>${escapeHtml(group.label === "Viewer" ? "Viewer & Collaboration" : group.label)}</h2>
            <span>${group.products.length} product${group.products.length > 1 ? "s" : ""}</span>
          </div>
        </div>
        <div class="product-grid">
          ${group.products.map(productCard).join("")}
        </div>
      </div>
    `).join("");
  }

  tabs.addEventListener("click", event => {
    const button = event.target.closest(".product-tab");
    if (!button) return;
    activeCategory = button.dataset.category;
    tabs.querySelectorAll(".product-tab").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    render();
  });

  if (input) {
    input.addEventListener("input", () => {
      activeSearch = input.value.trim().toLowerCase();
      render();
    });
  }

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  injectIcons();
  protectManagementPage();
  initManagementLogin();
  initWorkspaceSearch();
  initNotifications();
  initProductsPage();
});
