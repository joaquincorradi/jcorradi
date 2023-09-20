function lightMode() {
  var body = document.body;
  var iconSpan = document.querySelector("#theme-icon-desk");
  var iconSpanM = document.querySelector(".theme-icon-mobile");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    iconSpan.textContent = "dark_mode";
    iconSpanM.textContent = "dark_mode";
  } else {
    iconSpan.textContent = "light_mode";
    iconSpanM.textContent = "light_mode";
  }
}

function copyToClipboard(text) {
  var input = document.createElement("input");
  input.setAttribute("value", text);
  document.body.appendChild(input);

  input.select();

  var success = document.execCommand("copy");

  document.body.removeChild(input);

  if (success) {
    console.log("Texto copiado al portapapeles: " + text);
    showCopySuccessMessage();
  } else {
    console.error("Error al copiar al portapapeles");
  }
}

function showCopySuccessMessage() {
  var copySuccessMessage = document.getElementById("pop-up");
  copySuccessMessage.style.display = "flex";

  setTimeout(function () {
    copySuccessMessage.style.display = "none";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-rail a"); // Obtén todos los enlaces en la barra lateral
  const sections = document.querySelectorAll("section"); // Obtén todas las secciones de la página
  const iconSpans = document.querySelectorAll(
    ".nav-rail .material-symbols-outlined"
  ); // Obtén todos los iconos

  // Función para cambiar el color de fondo y la clase del icono del enlace activo
  function setActiveLink() {
    const currentScroll = window.scrollY;

    sections.forEach((section, index) => {
      const top = section.offsetTop - 100; // Ajusta este valor según sea necesario
      const bottom = section.offsetTop + section.offsetHeight; // Ajusta este valor según sea necesario

      if (currentScroll >= top && currentScroll <= bottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active"); // Elimina la clase "active" de todos los enlaces
        });

        iconSpans.forEach((iconSpan) => {
          iconSpan.classList.remove("active-icon"); // Elimina la clase "active-icon" de todos los iconos
        });

        navLinks[index].classList.add("active"); // Agrega la clase "active" al enlace correspondiente
        iconSpans[index].classList.add("active-icon"); // Agrega la clase "active-icon" al icono correspondiente
      }
    });
  }

  // Llama a la función cuando se carga la página y cuando se desplaza
  window.addEventListener("load", setActiveLink);
  window.addEventListener("scroll", setActiveLink);
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".mobile-nav-rail a"); // Obtén todos los enlaces en la barra lateral
  const sections = document.querySelectorAll("section"); // Obtén todas las secciones de la página
  const iconSpans = document.querySelectorAll(
    ".mobile-nav-rail .material-symbols-outlined"
  ); // Obtén todos los iconos

  // Función para cambiar el color de fondo y la clase del icono del enlace activo
  function setActiveLink() {
    const currentScroll = window.scrollY;

    sections.forEach((section, index) => {
      const top = section.offsetTop - 100; // Ajusta este valor según sea necesario
      const bottom = section.offsetTop + section.offsetHeight; // Ajusta este valor según sea necesario

      if (currentScroll >= top && currentScroll <= bottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active"); // Elimina la clase "active" de todos los enlaces
        });

        iconSpans.forEach((iconSpan) => {
          iconSpan.classList.remove("active-icon"); // Elimina la clase "active-icon" de todos los iconos
        });

        navLinks[index].classList.add("active"); // Agrega la clase "active" al enlace correspondiente
        iconSpans[index].classList.add("active-icon"); // Agrega la clase "active-icon" al icono correspondiente
      }
    });
  }

  // Llama a la función cuando se carga la página y cuando se desplaza
  window.addEventListener("load", setActiveLink);
  window.addEventListener("scroll", setActiveLink);
});
