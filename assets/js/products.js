(() => {
  const PRODUCT_DEFAULTS_V5 = [
    {
      id: "gstarcad",
      name: "GstarCAD",
      category: "CAD",
      logo: "assets/img/products/GstarCAD.png",
      tagline: "Professional CAD Platform",
      description: "Professional CAD Platform",
      overview: {
        "Current Version": "2027 SP0",
        "Platform": "Windows / macOS",
        "License": "Perpetual / Subscription",
        "Official Website": "https://www.gstarcad.net/"
      }
    },
    {
      id: "gstarcad-architecture",
      name: "GstarCAD Architecture",
      category: "CAD",
      logo: "assets/img/products/GstarCAD-Architecture.png",
      tagline: "Architecture CAD Solution",
      description: "Architecture CAD Solution",
      overview: {
        "Current Version": "2027",
        "Platform": "Windows",
        "License": "Perpetual / Subscription",
        "Official Website": "https://www.gstarcad.net/"
      }
    },
    {
      id: "gstarcad-mechanical",
      name: "GstarCAD Mechanical",
      category: "CAD",
      logo: "assets/img/products/GstarCAD-Mechanical.png",
      tagline: "Mechanical Design CAD",
      description: "Mechanical Design CAD",
      overview: {
        "Current Version": "2027",
        "Platform": "Windows",
        "License": "Perpetual / Subscription",
        "Official Website": "https://www.gstarcad.net/"
      }
    },
    {
      id: "solidworks",
      name: "SolidWorks",
      category: "Partners",
      logo: "assets/img/products/SolidWorks.png",
      tagline: "3D CAD Design Platform",
      description: "3D CAD Design Platform",
      overview: {
        "Current Version": "2026",
        "Platform": "Windows",
        "License": "Subscription",
        "Official Website": "https://www.solidworks.com/"
      }
    },
    {
      id: "gstarbim",
      name: "GstarBIM",
      category: "BIM",
      logo: "assets/img/products/GstarBIM.png",
      tagline: "BIM Design Workspace",
      description: "BIM Design Workspace",
      overview: {
        "Current Version": "2026",
        "Platform": "Windows",
        "License": "Perpetual / Subscription",
        "Official Website": "https://www.thaigstarcad.com/gstarbim"
      }
    },
    {
      id: "extraxion",
      name: "ExtrAXION",
      category: "BOQ & Estimation",
      logo: "assets/img/products/ExtrAXION.png",
      tagline: "BOQ & Estimation Software",
      description: "ซอฟต์แวร์ประเมินราคาและถอดปริมาณงานก่อสร้าง",
      overview: {
        "Current Version": "Latest",
        "Platform": "Windows",
        "License": "Subscription",
        "Official Website": "https://www.thaigstarcad.com/"
      }
    },
    {
      id: "gstarcad365",
      name: "GstarCAD 365",
      category: "Viewer & Collaboration",
      logo: "assets/img/products/GstarCAD-365.png",
      tagline: "Cloud CAD Collaboration",
      description: "Cloud CAD Collaboration",
      overview: {
        "Current Version": "Latest",
        "Platform": "Web / Mobile",
        "License": "Subscription",
        "Official Website": "https://www.gstarcad.net/"
      }
    },
    {
      id: "3d-fastview",
      name: "3D FastView",
      category: "Viewer & Collaboration",
      logo: "assets/img/products/3D-Fastview.png",
      tagline: "3D Viewer & Collaboration",
      description: "3D Viewer & Collaboration",
      overview: {
        "Current Version": "Latest",
        "Platform": "Windows / Web / Mobile",
        "License": "Subscription",
        "Official Website": "https://www.3dfastview.com/"
      }
    },
    {
      id: "cadprofi",
      name: "CADProfi",
      category: "Add-ons",
      logo: "assets/img/products/CADProfi.png",
      tagline: "CAD Add-on Library",
      description: "CAD Add-on Library",
      overview: {
        "Current Version": "Latest",
        "Platform": "Windows",
        "License": "Perpetual / Subscription",
        "Official Website": "https://www.cadprofi.com/"
      }
    },
    {
      id: "formlabs",
      name: "FormLabs",
      category: "3D Printing",
      logo: "assets/img/products/FormLabs.png",
      tagline: "Professional 3D Printing",
      description: "Professional 3D Printing",
      overview: {
        "Current Version": "Latest",
        "Platform": "Hardware / Software",
        "License": "Hardware / Subscription",
        "Official Website": "https://formlabs.com/"
      }
    }
  ];

  const CATEGORIES = [
    "All",
    "CAD",
    "BIM",
    "BOQ & Estimation",
    "Viewer & Collaboration",
    "Add-ons",
    "3D Printing",
    "Partners"
  ];

  let products = PRODUCT_DEFAULTS_V5;
  let activeCategory = "All";
  let expandedProductId = null;

  const byId = id => document.getElementById(id);
  const safe = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  function getActions(product) {
    const website = product.overview["Official Website"] || "#";
    return [
      { title: "Download Free Trial", url: website },
      { title: "Download Trial + Script", url: website },
      { title: "Open Ticket", url: "https://cs.applicadthai.com/" },
      { title: "Open Website", url: website }
    ];
  }

  function showToast(message) {
    let toast = byId("v5Toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "v5Toast";
      toast.className = "v5-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(window.__gstarProductToast);
    window.__gstarProductToast = setTimeout(() => toast.classList.remove("show"), 1400);
  }

  async function copyUrl(url, button) {
    if (!url || url === "#") {
      showToast("Link not added yet");
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const area = document.createElement("textarea");
      area.value = url;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    const original = button.innerHTML;
    button.classList.add("copied");
    button.innerHTML = '<span class="copy-icon">✓</span> Copied';
    setTimeout(() => {
      button.classList.remove("copied");
      button.innerHTML = original;
    }, 1200);
  }

  function openUrl(url) {
    if (!url || url === "#") {
      showToast("Link not added yet");
      return;
    }
    window.open(url, "_blank", "noopener");
  }

  function card(product) {
    const expanded = product.id === expandedProductId;
    const initials = product.name.split(/\s+/).map(word => word[0]).join("").slice(0, 2);
    const overviewRows = Object.entries(product.overview);
    const actions = getActions(product);

    return `
      <article class="product-card-v5 ${expanded ? "expanded" : ""}" data-product-id="${safe(product.id)}" tabindex="0" aria-expanded="${expanded}">
        <div class="product-logo-shell">
          <img class="product-logo-v5" src="${safe(product.logo)}" alt="${safe(product.name)} logo"
            onerror="this.outerHTML='<div class=&quot;initial-logo&quot;>${safe(initials)}</div>'">
        </div>
        <h3>${safe(product.name)}</h3>
        <p>${safe(product.tagline || product.description)}</p>
        <div class="product-open-hint">Open Workspace →</div>

        <div class="product-expanded-body">
          <div class="v5-block-title">Quick Actions</div>
          <div class="quick-action-list">
            ${actions.map(action => `
              <div class="quick-action-card">
                <div class="quick-action-title">${safe(action.title)}</div>
                <button class="quick-action-btn" type="button" data-open-url="${safe(action.url)}">Open</button>
                <button class="quick-action-btn copy-product-url" type="button" data-copy-url="${safe(action.url)}">Copy</button>
              </div>
            `).join("")}
          </div>

          <div class="v5-block-title">Overview</div>
          <div class="overview-grid-v5">
            ${overviewRows.map(([label, value]) => `
              <div class="overview-item-v5">
                <span>${safe(label)}</span>
                <strong>${safe(value)}</strong>
              </div>
            `).join("")}
          </div>
        </div>
      </article>
    `;
  }

  function renderProductsV5() {
    const tabs = byId("categoryTabs");
    const groups = byId("productGroups");
    const search = byId("productSearch");
    if (!tabs || !groups) return;

    groups.classList.add("v5");

    if (!tabs.dataset.productsReady) {
      tabs.innerHTML = CATEGORIES.map(category => `
        <button class="tab ${category === activeCategory ? "active" : ""}" data-category="${safe(category)}">${safe(category)}</button>
      `).join("");

      tabs.querySelectorAll(".tab").forEach(button => {
        button.addEventListener("click", () => {
          activeCategory = button.dataset.category;
          expandedProductId = null;
          tabs.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab === button));
          renderProductsV5();
        });
      });

      search?.addEventListener("input", () => {
        expandedProductId = null;
        renderProductsV5();
      });

      tabs.dataset.productsReady = "1";
    }

    const query = (search?.value || "").trim().toLowerCase();
    const filtered = products.filter(product => {
      const categoryMatch = activeCategory === "All" || product.category === activeCategory;
      const text = `${product.name} ${product.category} ${product.tagline} ${product.description}`.toLowerCase();
      return categoryMatch && (!query || text.includes(query));
    });

    if (!filtered.length) {
      groups.innerHTML = '<div class="empty-products-v5"><strong>No products found</strong><br><span>Try another keyword or category.</span></div>';
      return;
    }

    groups.innerHTML = `
      <div class="section-head">
        <div>
          <div class="section-title">${safe(activeCategory === "All" ? "All Products" : activeCategory)}</div>
          <div class="section-desc">${filtered.length} products · click a card to open workspace actions</div>
        </div>
      </div>
      <div class="product-grid-v5">${filtered.map(card).join("")}</div>
    `;

    groups.querySelectorAll(".product-card-v5").forEach(item => {
      const toggle = () => {
        const id = item.dataset.productId;
        expandedProductId = expandedProductId === id ? null : id;
        renderProductsV5();
      };
      item.addEventListener("click", event => {
        if (event.target.closest("button")) return;
        toggle();
      });
      item.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      });
    });

    groups.querySelectorAll("[data-open-url]").forEach(button => {
      button.addEventListener("click", event => {
        event.stopPropagation();
        openUrl(button.dataset.openUrl);
      });
    });

    groups.querySelectorAll("[data-copy-url]").forEach(button => {
      button.addEventListener("click", event => {
        event.stopPropagation();
        copyUrl(button.dataset.copyUrl, button);
      });
    });
  }

  // Override only the Products page renderer from the shared core.
  window.renderProducts = renderProductsV5;

  const start = () => renderProductsV5();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
