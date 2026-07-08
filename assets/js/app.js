
const navLinks = document.querySelectorAll(".nav a");
const currentPage = location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});

const MANAGEMENT_PASSWORD = "gstar2026";
const MANAGEMENT_SESSION_KEY = "gstar_management_unlocked";

function logoutManagement(){
  sessionStorage.removeItem(MANAGEMENT_SESSION_KEY);
  window.location.href = "management-login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#managementLoginForm");

  if(loginForm){
    loginForm.addEventListener("submit", e => {
      e.preventDefault();

      const input = document.querySelector("#managementPassword");
      const error = document.querySelector("#managementError");

      if(input.value.trim() === MANAGEMENT_PASSWORD){
        sessionStorage.setItem(MANAGEMENT_SESSION_KEY, "true");
        window.location.href = "Gstar-Management.html";
      }else{
        error.classList.add("show");
        input.value = "";
        input.focus();
      }
    });
  }

  if(currentPage === "Gstar-Management.html"){
    if(sessionStorage.getItem(MANAGEMENT_SESSION_KEY) !== "true"){
      window.location.href = "management-login.html";
    }
  }
});
