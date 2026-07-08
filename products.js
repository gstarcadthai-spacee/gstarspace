const products = [
  { name:'GstarCAD', logo:'GstarCAD.png', category:'CAD', status:'Active', desc:'2D CAD สำหรับงานเขียนแบบ DWG พร้อมเอกสารขาย การตลาด และซัพพอร์ตหลัก', primary:'Open Product', secondary:'Sales Kit' },
  { name:'GstarCAD 365', logo:'GstarCAD-365.png', category:'CAD', status:'Active', desc:'แพ็กเกจ Subscription / Cloud / Collaboration ที่เกี่ยวข้องกับ GstarCAD ecosystem', primary:'Open Product', secondary:'Open Link' },
  { name:'GstarCAD Mechanical', logo:'GstarCAD-Mechanical.png', category:'CAD', status:'Active', desc:'เครื่องมือ CAD สำหรับงาน Mechanical และเอกสารเฉพาะทางด้านวิศวกรรม', primary:'Open Product', secondary:'Open Link' },
  { name:'GstarCAD Architecture', logo:'GstarCAD-Architecture.png', category:'CAD', status:'Active', desc:'ข้อมูลสำหรับงานสถาปัตย์และทรัพยากรที่เกี่ยวข้องกับ Architecture workflow', primary:'Open Product', secondary:'Open Link' },
  { name:'GstarBIM', logo:'GstarBIM.png', category:'BIM', status:'Active', desc:'BIM transition resources สำหรับทีมที่ต้องการเริ่มจาก CAD ไปสู่ BIM', primary:'Open Product', secondary:'Launch Kit' },
  { name:'3D FastView', logo:'3D-Fastview.png', category:'Viewer & Collaboration', status:'Active', desc:'Viewer และ Collaboration workflow สำหรับการเปิดดูและสื่อสารไฟล์ 3D', primary:'Open Product', secondary:'Open Link' },
  { name:'CADprofi', logo:'CADProfi.png', category:'Add-ons', status:'Active', desc:'Add-on สำหรับงาน Mechanical, Electrical, HVAC และ Architecture', primary:'Open Product', secondary:'Open Link' },
  { name:'ExtrAXION', logo:'ExtrAXION.png', category:'BOQ & Cost Estimation', status:'Active', desc:'ซอฟต์แวร์ถอดปริมาณงานก่อสร้างและประเมินราคา สำหรับงานก่อสร้างและโครงการ AEC', primary:'Open Product', secondary:'Sales Kit' },
  { name:'FormLabs', logo:'FormLabs.png', category:'3D Printing', status:'Active', desc:'ข้อมูลและลิงก์สำหรับ 3D Printing, printer workflow และอุปกรณ์ที่เกี่ยวข้อง', primary:'Open Product', secondary:'Open Link' },
  { name:'SolidWorks', logo:'SolidWorks.png', category:'Partners', status:'External', desc:'ลิงก์และข้อมูลอ้างอิงสำหรับ CAD / 3D Design ที่เกี่ยวข้องกับพาร์ทเนอร์หรือระบบภายนอก', primary:'Open External', secondary:'Resource' }
];

const categories = ['All', 'CAD', 'BIM', 'Viewer & Collaboration', 'Add-ons', 'BOQ & Cost Estimation', '3D Printing', 'Partners'];
let activeCategory = 'All';

const grid = document.getElementById('productGrid');
const chips = document.getElementById('categoryChips');
const productSearch = document.getElementById('productSearch');
const globalSearch = document.getElementById('globalSearch');

function fallbackText(name){
  return name.split(/\s|-/).map(w => w[0]).join('').slice(0, 3).toUpperCase();
}

function renderLogo(p){
  const src = `assets/${p.logo}`;
  const alt = `${p.name} logo`;
  const fallback = fallbackText(p.name);
  return `
    <div class="logo">
      <img src="${src}" alt="${alt}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <span class="logo-fallback">${fallback}</span>
    </div>
  `;
}

function renderChips(){
  chips.innerHTML = categories.map(cat => `<button class="chip ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>`).join('');
  document.querySelectorAll('.chip').forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.cat;
    renderChips();
    renderProducts();
  }));
}

function renderProducts(){
  const q = (productSearch.value || globalSearch.value || '').toLowerCase().trim();
  const list = products.filter(p => {
    const inCategory = activeCategory === 'All' || p.category === activeCategory;
    const inSearch = !q || `${p.name} ${p.category} ${p.desc}`.toLowerCase().includes(q);
    return inCategory && inSearch;
  });
  grid.innerHTML = list.map(p => `
    <article class="card">
      ${renderLogo(p)}
      <div class="meta">
        <span class="tag">${p.category}</span>
        <span class="status ${p.status === 'External' ? 'external' : ''}">${p.status}</span>
      </div>
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <div class="actions">
        <button class="btn primary">${p.primary}</button>
        <button class="btn secondary">${p.secondary}</button>
      </div>
    </article>
  `).join('') || '<p class="empty">No products found.</p>';
}

productSearch.addEventListener('input', renderProducts);
globalSearch.addEventListener('input', () => { productSearch.value = globalSearch.value; renderProducts(); });
renderChips();
renderProducts();
