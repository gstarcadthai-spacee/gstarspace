const MANAGEMENT_PASSWORD = "gstar2026";

const workspaceSearchData = [
  {
    title: "Products",
    description: "GstarCAD, GstarBIM, CADProfi, SolidWorks, FormLabs และ Product Resources",
    url: "products.html",
    icon: "P",
    keywords: ["products", "product", "gstarcad", "gstarbim", "cadprofi", "3d fastview", "solidworks", "formlabs", "sales kit", "product resources", "สินค้า", "ผลิตภัณฑ์"]
  },
  {
    title: "Marketing Hub",
    description: "Campaign, Brand Assets, Social Content และ Landing Page",
    url: "marketing.html",
    icon: "M",
    keywords: ["marketing", "campaign", "brand", "assets", "social", "line oa", "landing page", "content", "การตลาด", "แคมเปญ"]
  },
  {
    title: "Sales Hub",
    description: "Price List, Proposal, Comparison และ Quote Support",
    url: "sales.html",
    icon: "S",
    keywords: ["sales", "price", "price list", "proposal", "comparison", "quote", "quotation", "ขาย", "ราคา", "ใบเสนอราคา"]
  },
  {
    title: "Support Hub",
    description: "Installation, Activation, License, FAQ และ Troubleshooting",
    url: "support.html",
    icon: "T",
    keywords: ["support", "installation", "install", "activation", "license", "faq", "troubleshooting", "serial", "technical", "ซัพพอร์ต", "ติดตั้ง", "activate"]
  },
  {
    title: "Knowledge Base",
    description: "How-to, Wiki, Training, Popular Articles และ Internal Knowledge",
    url: "knowledge.html",
    icon: "K",
    keywords: ["knowledge", "wiki", "training", "how to", "article", "guide", "kb", "คู่มือ", "บทความ", "เทรนนิ่ง"]
  },
  {
    title: "AI Assistant",
    description: "Workspace AI Prototype และ Internal Copilot",
    url: "ai-assistant.html",
    icon: "AI",
    keywords: ["ai", "assistant", "bot", "copilot", "prompt", "chat", "openai", "gemini"]
  },
  {
    title: "Management",
    description: "Management Login, Resource Library และ Admin Console",
    url: "management-login.html",
    icon: "G",
    keywords: ["management", "admin", "console", "login", "resource", "announcement", "จัดการ", "ผู้ดูแล"]
  }
];

const productData = [
  {
    name: "GstarCAD",
    category: "CAD",
    image: "GstarCAD.png",
    description: "2D CAD สำหรับงานเขียนแบบ DWG พร้อมเอกสารขาย การตลาด และซัพพอร์ตหลัก",
    status: "Active",
    enabled: true,
    external: false,
    url: "#",
    secondaryUrl: "sales.html",
    secondaryLabel: "Sales Kit",
    keywords: ["2d cad", "dwg", "drafting", "license", "gstarcad"]
  },
  {
    name: "GstarCAD Mechanical",
    category: "CAD",
    image: "GstarCAD-Mechanical.png",
    description: "เครื่องมือ CAD สำหรับงาน Mechanical และเอกสารเฉพาะทางด้านงานวิศวกรรม",
    status: "Active",
    enabled: true,
    external: false,
    url: "#",
    secondaryUrl: "#",
    secondaryLabel: "Open Link",
    keywords: ["mechanical", "cad", "engineering"]
  },
  {
    name: "GstarCAD Architecture",
    category: "CAD",
    image: "GstarCAD-Architecture.png",
    description: "ข้อมูลสำหรับงานสถาปัตย์และทรัพยากรที่เกี่ยวข้องกับ Architecture workflow",
    status: "Active",
    enabled: true,
    external: false,
    url: "#",
    secondaryUrl: "#",
    secondaryLabel: "Open Link",
    keywords: ["architecture", "building", "cad"]
  },
  {
    name: "SolidWorks",
    category: "CAD",
    image: "SolidWorks.jpg",
    description: "ลิงก์และข้อมูลอ้างอิงสำหรับ CAD / 3D Design ที่เกี่ยวข้องกับพาร์ทเนอร์หรือระบบภายนอก",
    status: "External",
    enabled: true,
    external: true,
    url: "https://www.8baht.com/",
    secondaryUrl: "#",
    secondaryLabel: "Resource",
    keywords: ["solidworks", "3d cad", "partner", "8baht"]
  },
  {
    name: "GstarBIM",
    category: "BIM",
    image: "GstarBIM.png",
    description: "BIM transition resources สำหรับทีมที่ต้องการเริ่มจาก CAD ไปสู่ BIM",
    status: "Active",
    enabled: true,
    external: false,
    url: "#",
    secondaryUrl: "marketing.html",
    secondaryLabel: "Launch Kit",
    keywords: ["bim", "ifc", "revit", "cad to bim", "gstarbim"]
  },
  {
    name: "GstarCAD 365",
    category: "Viewer & Collaboration",
    image: "GstarCAD-365.png",
    description: "ทรัพยากรสำหรับบริการ Cloud / Collaboration ที่เกี่ยวข้องกับ GstarCAD ecosystem",
    status: "Active",
    enabled: true,
    external: false,
    url: "#",
    secondaryUrl: "#",
    secondaryLabel: "Open Link",
    keywords: ["365", "cloud", "collaboration", "subscription"]
  },
  {
    name: "3D FastView",
    category: "Viewer & Collaboration",
    image: "3D-Fastview.png",
    description: "Viewer และ Collaboration workflow สำหรับการเปิดดูและสื่อสารไฟล์ 3D",
    status: "Active",
    enabled: true,
    external: false,
    url: "#",
    secondaryUrl: "#",
    secondaryLabel: "Open Link",
    keywords: ["3d fastview", "viewer", "collaboration", "3d viewer"]
  },
  {
    name: "CADProfi",
    category: "Add-ons",
    image: "CADProfi.png",
    description: "Add-on สำหรับงาน Mechanical, Electrical, HVAC และ Architecture",
    status: "Active",
    enabled: true,
    external: false,
    url: "#",
    secondaryUrl: "#",
    secondaryLabel: "Open Link",
    keywords: ["cadprofi", "add-on", "hvac", "electrical", "mechanical"]
  },
  {
    name: "ExtraXION",
    category: "Manufacturing",
    image: "ExtrAXION.png",
    description: "ทรัพยากรสำหรับงาน Manufacturing และ workflow ที่เกี่ยวข้องกับการผลิต",
    status: "Active",
    enabled: true,
    external: false,
    url: "#",
    secondaryUrl: "#",
    secondaryLabel: "Open Link",
    keywords: ["extraxion", "manufacturing", "production"]
  },
  {
    name: "FormLabs",
    category: "3D Printing",
    image: "FormLabs.png",
    description: "ข้อมูลและลิงก์สำหรับ 3D Printing, printer workflow และอุปกรณ์ที่เกี่ยวข้อง",
    status: "Active",
    enabled: true,
    external: false,
    url: "#",
    secondaryUrl: "#",
    secondaryLabel: "Open Link",
    keywords: ["formlabs", "3d printing", "printer", "resin"]
  }
];

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

    const productSearchItems = productData
      .filter(product => product.enabled)
      .map(product => ({
        title: product.name,
        description: `${product.category} · ${product.description}`,
        url: "products.html",
        icon: "P",
        keywords: [product.name, product.category, product.description, ...(product.keywords || [])]
      }));

    const matches = [...workspaceSearchData, ...productSearchItems].filter(item => {
      const haystack = [item.title, item.description, ...item.keywords].join(" ").toLowerCase();
      return haystack.includes(q);
    });

    results.classList.add("show");

    if (!matches.length) {
      results.innerHTML = `<div class="search-empty">No results found for “${escapeHtml(query)}”</div>`;
      return;
    }

    results.innerHTML = matches.map(item => `
      <a class="search-result-item" href="${item.url}">
        <div class="search-result-icon">${item.icon}</div>
        <div>
          <strong>${item.title}</strong>
          <span>${item.description}</span>
        </div>
      </a>
    `).join("");
  }

  input.addEventListener("input", function () {
    renderResults(input.value);
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const firstResult = results.querySelector(".search-result-item");
      if (firstResult) window.location.href = firstResult.getAttribute("href");
    }
    if (event.key === "Escape") {
      results.classList.remove("show");
      input.blur();
    }
  });

  document.addEventListener("keydown", function (event) {
    const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    if (isShortcut) {
      event.preventDefault();
      input.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-wrap")) results.classList.remove("show");
  });
}

function initNotifications() {
  const button = document.getElementById("notificationBtn");
  const panel = document.getElementById("notificationPanel");
  if (!button || !panel) return;

  button.addEventListener("click", function (event) {
    event.stopPropagation();
    panel.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".notification-panel") && !event.target.closest(".notification-btn")) {
      panel.classList.remove("show");
    }
  });
}

function initProductsPage() {
  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("productSearch");
  const tabs = document.getElementById("productTabs");
  const empty = document.getElementById("productEmpty");
  if (!grid) return;

  let activeCategory = "all";
  let searchQuery = "";

  function renderProducts() {
    const q = searchQuery.trim().toLowerCase();
    const visibleProducts = productData.filter(product => {
      if (!product.enabled) return false;
      const categoryMatch = activeCategory === "all" || product.category === activeCategory;
      const haystack = [product.name, product.category, product.description, ...(product.keywords || [])].join(" ").toLowerCase();
      const searchMatch = !q || haystack.includes(q);
      return categoryMatch && searchMatch;
    });

    grid.innerHTML = visibleProducts.map(product => createProductCard(product)).join("");
    if (empty) empty.classList.toggle("show", visibleProducts.length === 0);
  }

  if (tabs) {
    tabs.addEventListener("click", function (event) {
      const button = event.target.closest(".product-tab");
      if (!button) return;
      activeCategory = button.dataset.filter;
      tabs.querySelectorAll(".product-tab").forEach(tab => tab.classList.remove("active"));
      button.classList.add("active");
      renderProducts();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      searchQuery = searchInput.value;
      renderProducts();
    });
  }

  renderProducts();
}

function createProductCard(product) {
  const imagePath = `assets/img/products/${product.image}`;
  const statusClass = product.external ? "external" : product.status.toLowerCase().includes("soon") ? "soon" : "";
  const target = product.external ? `target="_blank" rel="noopener"` : "";
  const fallback = product.name.split(" ").map(word => word[0]).join("").slice(0, 3).toUpperCase();

  return `
    <article class="product-card">
      <div class="product-logo" data-fallback="${escapeHtml(fallback)}">
        <img src="${imagePath}" alt="${escapeHtml(product.name)} logo" onerror="this.closest('.product-logo').classList.add('logo-missing');this.remove();">
      </div>
      <div class="product-meta">
        <span class="tag ${product.category === "CAD" || product.category === "BIM" ? "blue" : ""}">${escapeHtml(product.category)}</span>
        <span class="product-status ${statusClass}">${escapeHtml(product.status)}</span>
      </div>
      <h3>${escapeHtml(product.name)}</h3>
      <p>${escapeHtml(product.description)}</p>
      <div class="product-actions">
        <a href="${product.url}" class="btn primary" ${target}>${product.external ? "Open External" : "Open Product"}</a>
        <a href="${product.secondaryUrl}" class="btn secondary">${escapeHtml(product.secondaryLabel)}</a>
      </div>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", function () {
  initManagementLogin();
  protectManagementPage();
  initWorkspaceSearch();
  initNotifications();
  initProductsPage();
});
