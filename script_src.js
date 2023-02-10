var menuBtn = document.querySelector(".menu-btn");
var menuList = document.querySelector(".menu-list");
var menuOpen = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!menuOpen) {
    menuList.style.display = "block";
    menuOpen = true;
  } else {
    menuList.style.display = "none";
    menuOpen = false;
  }
}