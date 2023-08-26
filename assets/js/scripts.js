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

  var icon = document.getElementById("theme-icon-desk");
  if (body.classList.contains("light-mode")) {
    icon.classList.remove("ri-sun-line");
    icon.classList.add("ri-moon-fill");
  } else {
    icon.classList.remove("ri-moon-fill");
    icon.classList.add("ri-sun-line");
  }
}
