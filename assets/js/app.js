const MANAGEMENT_PASSWORD = "gstar2026";

const workspaceSearchData = [
  {
    title: "Products",
    description: "GstarCAD, GstarBIM, CADprofi, 3D FastView และ Product Resources",
    url: "products.html",
    icon: "P",
    keywords: ["products", "product", "gstarcad", "gstarbim", "cadprofi", "3d fastview", "sales kit", "product resources", "สินค้า", "ผลิตภัณฑ์"]
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

    const matches = workspaceSearchData.filter(item => {
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

function escapeHtml(value) {
  return value
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
});
