(() => {
  const HUB_RULES = {
    Sales: ["Price List", "Brochure", "Presentation", "Document", "Website"],
    Marketing: ["KV", "Brochure", "Presentation", "Canva", "Website"],
    Knowledge: ["Manual", "Document", "Website"],
    Support: ["Manual", "Installer", "Document", "Website"]
  };

  const escapeHTML = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  function normalizeHubs(value) {
    if (Array.isArray(value)) return value.map(String);
    if (!value) return [];

    const text = String(value).trim();
    if (!text) return [];

    try {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) return parsed.map(String);
    } catch (error) {}

    return text
      .split(/[,|/]/)
      .map(item => item.trim())
      .filter(Boolean);
  }

  function productMap(products) {
    return new Map((Array.isArray(products) ? products : []).map(product => [
      String(product.ID || product.id || ""),
      product.Name || product.name || "All Products"
    ]));
  }

  function resourceCard(resource, products) {
    const product = products.get(String(resource.ProductID || resource.productId || "")) || "All Products";
    const url = resource.URL || resource.url || "";
    const title = resource.Title || resource.title || "Untitled Resource";
    const description = resource.Description || resource.description || "No description";
    const category = resource.Category || resource.category || "Resource";
    const type = resource.Type || resource.type || "Link";

    return `
      <article class="card">
        <div class="icon-badge">${escapeHTML(category.slice(0, 1).toUpperCase())}</div>
        <h3>${escapeHTML(title)}</h3>
        <p>${escapeHTML(description)}</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin:16px 0">
          <span class="tag blue">${escapeHTML(category)}</span>
          <span class="tag">${escapeHTML(type)}</span>
          <span class="tag">${escapeHTML(product)}</span>
        </div>
        <button class="btn primary hub-resource-open" type="button" data-url="${escapeHTML(url)}">
          Open Resource
        </button>
      </article>
    `;
  }

  async function initHubResources() {
    const hub = document.body.dataset.resourceHub;
    const status = document.getElementById("hubResourceStatus");
    const cards = document.getElementById("hubResourceCards");

    if (!hub || !status || !cards) return;

    const allowedCategories = HUB_RULES[hub] || [];

    status.hidden = true;
    status.style.display = 'none';
    cards.hidden = false;
    cards.style.display = '';
    cards.innerHTML = `<div class="skeleton-grid">${Array.from({length:3},()=>`<article class="skeleton-card"><div class="skeleton skeleton-circle"></div><div class="skeleton skeleton-line lg"></div><div class="skeleton skeleton-line md"></div><div class="skeleton skeleton-line sm"></div></article>`).join('')}</div>`;

    try {
      const data = await GstarAPI.bootstrap();
      const resources = Array.isArray(data.resources) ? data.resources : [];
      const products = productMap(data.products);

      const routed = resources
        .filter(resource => {
          const statusValue = String(resource.Status || resource.status || "").trim().toLowerCase();
          const category = String(resource.Category || resource.category || "").trim();
          const hubs = normalizeHubs(resource.Hubs || resource.hubs)
            .map(item => item.trim().toLowerCase());

          return statusValue === "published"
            && hubs.includes(hub.toLowerCase())
            && allowedCategories.includes(category);
        })
        .sort((a, b) => {
          const aDate = new Date(a.UpdatedAt || a.updatedAt || 0).getTime();
          const bDate = new Date(b.UpdatedAt || b.updatedAt || 0).getTime();
          return bDate - aDate;
        });

      if (!routed.length) {
        status.innerHTML = `
          <div class="list-item">
            <div>
              <strong>No published resources routed to ${escapeHTML(hub)}.</strong>
              <span>Add a Resource in Control Tower and select ${escapeHTML(hub)} in Show in Hubs.</span>
            </div>
          </div>
        `;
        cards.hidden = true;
        cards.style.display = 'none';
        status.hidden = false;
        status.style.display = '';
        return;
      }

      status.hidden = true;
      status.style.display = 'none';
      cards.hidden = false;
      cards.style.display = '';
      cards.innerHTML = routed.map(resource => resourceCard(resource, products)).join("");
      cards.classList.add("content-loaded");
      setTimeout(() => cards.classList.remove("content-loaded"), 450);

      cards.querySelectorAll(".hub-resource-open").forEach(button => {
        button.addEventListener("click", () => {
          const url = button.dataset.url;
          if (!url) {
            const original = button.textContent;
            button.textContent = "No link";
            setTimeout(() => button.textContent = original, 1200);
            return;
          }
          window.open(url, "_blank", "noopener");
        });
      });
    } catch (error) {
      console.error(`Could not load ${hub} resources.`, error);
      status.innerHTML = `
        <div class="list-item">
          <div>
            <strong>Unable to load resources.</strong>
            <span>Please refresh the page or check the Workspace API.</span>
          </div>
        </div>
      `;
      cards.hidden = true;
      cards.style.display = 'none';
      status.hidden = false;
      status.style.display = '';
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHubResources, { once: true });
  } else {
    initHubResources();
  }
})();
