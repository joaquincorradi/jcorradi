function toggleMenu() {
  const menu = document.querySelector(".hamburger-menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const closeIcon = document.querySelector("ri-close-line");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  closeIcon.classList.toggle("open");
}

function lightMode() {
  var body = document.body;
  body.classList.toggle("light-mode");
}
