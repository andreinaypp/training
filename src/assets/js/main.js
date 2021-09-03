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

// ------------------------------------------------------------
// LOGIN
// ------------------------------------------------------------

let eyeHide = document.querySelector("#hide");
let eyeShow = document.querySelector("#show");
let password = document.querySelector("#password");

show.addEventListener("click", () => {
  password.setAttribute("type", "text");
  eyeHide.style.display = "block";
  eyeShow.style.display = "none";
});

hide.addEventListener("click", () => {
  password.setAttribute("type", "password");
  eyeHide.style.display = "none";
  eyeShow.style.display = "block";
});
