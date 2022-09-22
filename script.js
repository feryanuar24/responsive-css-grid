const nav = document.getElementsByClassName("menu-list")[0];
const menuToggle = document.getElementsByClassName("menu-toggle")[0];

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("menu-list");
});
