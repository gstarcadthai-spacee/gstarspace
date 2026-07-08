const navLinks = document.querySelectorAll(".nav a");
const currentPage = location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});

function unlockManagement(){
  document.body.classList.remove("locked");
  const gate = document.querySelector(".admin-gate");
  if(gate) gate.style.display = "none";
}

function logoutManagement(){
  sessionStorage.removeItem("gstar_management_unlocked");
  location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#adminLoginForm");
  if(!form) return;

  if(sessionStorage.getItem("gstar_management_unlocked") === "true"){
    unlockManagement();
  }

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
});