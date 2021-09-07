// ------------------------------------------------------------
// MENU
// ------------------------------------------------------------

let open = document.querySelector("#open");
let close = document.querySelector("#close");

open.addEventListener("click", () => {
  document.querySelector(".menu-open").style.left = "0%";
});
close.addEventListener("click", () => {
  document.querySelector(".menu-open").style.left = "-100%";
});

window.onscroll = function () {
  scrollFunction();
};

let menu = document.querySelector(".menu");
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    menu.style.background = "#262b31";
  } else {
    menu.style.background = "transparent";
  }
}
