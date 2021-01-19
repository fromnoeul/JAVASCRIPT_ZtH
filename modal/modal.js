const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const modalBg = modal.querySelector(".modal-bg");

const SHOWING_CN = "showing";

function init() {
    openBtn.addEventListener("click", event => {
        modal.classList.toggle(SHOWING_CN);
    });
    closeBtn.addEventListener("click", event => {
        modal.classList.toggle(SHOWING_CN);
    });
    modalBg.addEventListener("click", event => {
        modal.classList.toggle(SHOWING_CN);
    });
}

init();