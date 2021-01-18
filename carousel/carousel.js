const container = document.querySelector(".carousel-container");
let slide = container.querySelector(".slide");
const prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next");

const SHOW_CN = "showing";

function handlePrev(event) {
    let prevSib = slide.previousElementSibling;
    if(prevSib === null) {
        prevSib = container.lastElementChild;
    }
    slide.classList.remove(SHOW_CN);
    prevSib.classList.add(SHOW_CN);
    slide = prevSib;
}

function handleNext(event) {
    let nextSib = slide.nextElementSibling;
    if(nextSib === null) {
        nextSib = container.firstElementChild;
    }
    slide.classList.remove(SHOW_CN);
    nextSib.classList.add(SHOW_CN);
    slide = nextSib;
}

function init() {
    prevBtn.addEventListener("click", handlePrev);
    nextBtn.addEventListener("click", handleNext);
}

init();