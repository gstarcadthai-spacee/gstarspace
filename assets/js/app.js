const navLinks = document.querySelectorAll(".nav a");
const currentPage = location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage) link.classList.add("active");
});

function unlockManagement(){
  document.body.classList.remove("locked");
  const gate = document.querySelector(".admin-gate");
  if(gate) gate.style.display = "none";
}

function logoutManagement(){
  sessionStorage.removeItem("gstar_management_unlocked");
  location.href = "management-login.html";
}

const productCategories = ["CAD","BIM","BOQ & Estimation","Viewer & Collaboration","Add-ons","3D Printing","Partners"];
const defaultAdminProducts = [
  {id:"gstarcad",name:"GstarCAD",category:"CAD",image:"GstarCAD.png",status:"Active",url:"#",keywords:"cad,dwg,drafting",description:"2D CAD software",enabled:true,external:false},
  {id:"gstarcad-architecture",name:"GstarCAD Architecture",category:"CAD",image:"GstarCAD-Architecture.png",status:"Active",url:"#",keywords:"architecture,cad",description:"Architecture CAD solution",enabled:true,external:false},
  {id:"gstarcad-mechanical",name:"GstarCAD Mechanical",category:"CAD",image:"GstarCAD-Mechanical.png",status:"Active",url:"#",keywords:"mechanical,cad",description:"Mechanical CAD solution",enabled:true,external:false},
  {id:"gstarbim",name:"GstarBIM",category:"BIM",image:"GstarBIM.png",status:"Active",url:"#",keywords:"bim",description:"BIM transition platform",enabled:true,external:false},
  {id:"extraxion",name:"ExtrAXION",category:"BOQ & Estimation",image:"ExtrAXION.png",status:"Active",url:"#",keywords:"boq,estimation",description:"BOQ & Estimation software",enabled:true,external:false},
  {id:"gstarcad-365",name:"GstarCAD 365",category:"Viewer & Collaboration",image:"GstarCAD-365.png",status:"Active",url:"#",keywords:"cloud,collaboration",description:"Cloud CAD collaboration",enabled:true,external:false},
  {id:"3d-fastview",name:"3D FastView",category:"Viewer & Collaboration",image:"3D-Fastview.png",status:"Active",url:"#",keywords:"viewer,3d",description:"3D viewer & collaboration",enabled:true,external:false},
  {id:"cadprofi",name:"CADProfi",category:"Add-ons",image:"CADProfi.png",status:"Active",url:"#",keywords:"addon,cad",description:"CAD add-on library",enabled:true,external:false},
  {id:"formlabs",name:"Formlabs",category:"3D Printing",image:"FormLabs.png",status:"External",url:"#",keywords:"3d printing",description:"Professional 3D Printing",enabled:true,external:true},
  {id:"solidworks",name:"SolidWorks",category:"CAD",image:"SolidWorks.png",status:"External",url:"#",keywords:"3d cad",description:"3D CAD Design Platform",enabled:true,external:true}
];
function getAdminProducts(){
  try { return JSON.parse(localStorage.getItem("gstar_products_admin")) || defaultAdminProducts; }
  catch { return defaultAdminProducts; }
}
function setAdminProducts(products){ localStorage.setItem("gstar_products_admin", JSON.stringify(products)); }
function slugify(value){ return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""); }
function fillAdminCategories(){
  const select = document.getElementById("adminProductCategory");
  if(!select) return;
  select.innerHTML = productCategories.map(c => `<option value="${c}">${c}</option>`).join("");
}
function resetAdminForm(){
  const form = document.getElementById("adminProductForm");
  if(!form) return;
  form.reset();
  document.getElementById("adminProductId").value = "";
  document.getElementById("adminProductEnabled").checked = true;
  document.getElementById("adminProductExternal").checked = false;
}
function renderAdminTable(){
  const table = document.getElementById("adminProductTable");
  if(!table) return;
  table.innerHTML = getAdminProducts().map(p => `
    <tr>
      <td><strong>${p.name}</strong><small>${p.description || ""}</small></td>
      <td>${p.category}</td>
      <td><span class="tag ${p.status === "Active" ? "blue" : ""}">${p.status || "Active"}</span></td>
      <td>${p.enabled ? "Yes" : "No"}</td>
      <td>${p.external ? "External" : "Internal"}</td>
      <td><div class="mini-actions"><button class="mini-btn" type="button" onclick="editAdminProduct('${p.id}')">Edit</button><button class="mini-btn danger" type="button" onclick="deleteAdminProduct('${p.id}')">Delete</button></div></td>
    </tr>`).join("");
}
function editAdminProduct(id){
  const p = getAdminProducts().find(item => item.id === id);
  if(!p) return;
  document.getElementById("adminProductId").value = p.id;
  document.getElementById("adminProductName").value = p.name || "";
  document.getElementById("adminProductCategory").value = p.category || "CAD";
  document.getElementById("adminProductImage").value = p.image || "";
  document.getElementById("adminProductStatus").value = p.status || "Active";
  document.getElementById("adminProductUrl").value = p.url || "#";
  document.getElementById("adminProductKeywords").value = p.keywords || "";
  document.getElementById("adminProductDescription").value = p.description || "";
  document.getElementById("adminProductEnabled").checked = p.enabled !== false;
  document.getElementById("adminProductExternal").checked = !!p.external;
  document.getElementById("adminProductName").focus();
}
function deleteAdminProduct(id){
  if(!confirm("Delete this product?")) return;
  setAdminProducts(getAdminProducts().filter(p => p.id !== id));
  renderAdminTable();
}
function initManagementProducts(){
  const form = document.getElementById("adminProductForm");
  if(!form) return;
  fillAdminCategories();
  renderAdminTable();
  document.getElementById("adminAddProductBtn")?.addEventListener("click", resetAdminForm);
  document.getElementById("adminCancelEditBtn")?.addEventListener("click", resetAdminForm);
  document.getElementById("adminResetProductsBtn")?.addEventListener("click", () => {
    if(confirm("Reset demo product data?")) { localStorage.removeItem("gstar_products_admin"); resetAdminForm(); renderAdminTable(); }
  });
  form.addEventListener("submit", e => {
    e.preventDefault();
    const id = document.getElementById("adminProductId").value || slugify(document.getElementById("adminProductName").value);
    const next = {
      id,
      name: document.getElementById("adminProductName").value,
      category: document.getElementById("adminProductCategory").value,
      image: document.getElementById("adminProductImage").value,
      status: document.getElementById("adminProductStatus").value,
      url: document.getElementById("adminProductUrl").value || "#",
      keywords: document.getElementById("adminProductKeywords").value,
      description: document.getElementById("adminProductDescription").value,
      enabled: document.getElementById("adminProductEnabled").checked,
      external: document.getElementById("adminProductExternal").checked
    };
    const products = getAdminProducts().filter(p => p.id !== id);
    products.push(next);
    setAdminProducts(products);
    resetAdminForm();
    renderAdminTable();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#adminLoginForm");
  if(form){
    if(sessionStorage.getItem("gstar_management_unlocked") === "true") unlockManagement();
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = document.querySelector("#adminPassword");
      const error = document.querySelector("#adminError");
      if(input.value.trim() === "gstar2026"){
        sessionStorage.setItem("gstar_management_unlocked","true");
        unlockManagement();
      }else{
        error.classList.add("show");
        input.value = "";
        input.focus();
      }
    });
  }
  initManagementProducts();
});
