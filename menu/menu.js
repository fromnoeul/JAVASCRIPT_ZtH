const menuBtn = document.querySelector(".menu_btn"),
    menu = document.querySelector(".menu");

const APPEAR_CN = "appear";
function init() {
    menuBtn.addEventListener("click", event => {
        menu.classList.toggle(APPEAR_CN);
    });
}

init();