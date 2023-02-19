// ===== PRELOADER ===== //
const content = document.getElementById("content");
const preloader = document.getElementById('preloader')

const loading = () => {
  content.classList.remove("preloading");
  content.classList.add("loaded");
  preloader.classList.add('complete')
};

window.onload = (event) => {
  setTimeout(() => {
    loading();
  }, 2000);
};

// ===== NAV MENU  ====  //
const navMenu = document.getElementById("navMenu");
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const navMenuInner = document.getElementById("navItems");

openNav.addEventListener("click", () => {
  if (navMenu.classList.contains("nav-menu-close"))
    navMenu.classList.add("nav-menu-open");
  navMenu.classList.remove("nav-menu-close");
  navMenuInner.classList.add("nav-menu-inner-animation");
});

closeNav.addEventListener("click", () => {
  if (navMenu.classList.contains("nav-menu-open"))
    navMenu.classList.remove("nav-menu-open");
  navMenu.classList.add("nav-menu-close");
  navMenuInner.classList.remove("nav-menu-inner-animation");
});
