"use strict";
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header === null || header === void 0 ? void 0 : header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('#.navmenu')


menu.onclick = () =>{
    menu.classList.toggle('bx-x');

    navmenu.classList.toggle('open');
}