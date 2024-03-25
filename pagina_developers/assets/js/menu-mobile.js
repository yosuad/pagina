document.addEventListener("DOMContentLoaded", (Event) => {
  // SELECIONAR MIS DOS ELEMENTOS PRINCIPALES
  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".menu-mobile");

  //FUNCION MOSTRAR Y OCULTAR MENU
  const showHiddenMenu = () => {
    let show = document.querySelector(".menu-mobile--show");

    if (show) {
      mobile_menu.classList.remove("menu-mobile--show");
    } else {
      mobile_menu.classList.add("menu-mobile--show");
    }
  };

  // AL DAR CLIC AL BOTON DEL MENU MOSTRAR EL MENU DE NAVEGACION
  mobile_btn.addEventListener("click", showHiddenMenu);

  //AL REDIMENSIONAR LA PANTALLA POR DEBAJO DE 1000PX OCULTAR EL MENU
  window.addEventListener("resize", () => {
    let window_width = parseInt(document.body.clientWidth);
    if (window_width > 1000) {
      mobile_menu.classList.remove("menu-mobile--show");
    }
  });

  //CERRAR EL MENU CON EL BOTON X
  let btn_close = document.querySelector(".menu-mobile__close");

  btn_close.addEventListener("click", showHiddenMenu);

  //DESPLEGAR SUBMENUS
  let menu_item = document.querySelectorAll(".menu-mobile__item");

  menu_item.forEach((item) => {
    item.addEventListener("click", (event) => {
      let submenu = item.lastElementChild;

      if (submenu.className === "menu-mobile__submenu-mobile") {
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      }
    });
  });
});
