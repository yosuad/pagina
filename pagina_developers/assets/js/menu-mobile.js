document.addEventListener("DOMContentLoaded", (Event) => {
  // SELECIONAR MIS DOS ELEMENTOS PRINCIPALES
  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".menu-mobile");

  mobile_btn.addEventListener("click", () => {
    let show = document.querySelector(".menu-mobile--show");

    if (show) {
      mobile_menu.classList.remove("menu-mobile--show");
    } else {
      mobile_menu.classList.add("menu-mobile--show");
    }
  });
});
