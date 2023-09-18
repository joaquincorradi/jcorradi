function lightMode() {
  var body = document.body;
  body.classList.toggle("light-mode");

  // var icon = document.getElementById("theme-icon-desk");
  // if (body.classList.contains("light-mode")) {
  //   icon.classList.remove("ri-sun-line");
  //   icon.classList.add("ri-moon-fill");
  //   localStorage.setItem("theme", "light");
  // } else {
  //   icon.classList.remove("ri-moon-fill");
  //   icon.classList.add("ri-sun-line");
  //   localStorage.setItem("theme", "dark");
  // }
}

// Función para actualizar el color de fondo del enlace activo en la barra lateral
function updateActiveLink() {
  const sections = document.querySelectorAll(".section");
  const navIcons = document.querySelectorAll(".nav-rail__icon");
  const mdIcons = document.querySelectorAll(".material-symbols-outlined");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // La sección está visible en la ventana
      navIcons[index].classList.add("active-icon");
      mdIcons[index].classList.add("active-icon");
    } else {
      // La sección no está visible en la ventana
      navIcons[index].classList.remove("active-icon");
      mdIcons[index].classList.remove("active-icon");
    }
  });
}

// Escuchar el evento de desplazamiento (scroll) para actualizar el enlace activo
window.addEventListener("scroll", updateActiveLink);

// Llamar a la función al cargar la página para establecer el estado inicial
updateActiveLink();
