const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
];

let currentImgIndex = 0;

const sliderContainerEl = document.querySelector(".slider-container");
let sliderImgEl = "";

const btnNext = document.getElementById("slider-btn-next");
const btnPrev = document.getElementById("slider-btn-prev");

sliderImgEl.src = images[currentImgIndex];

for (let i = 0; i <= images.length - 1; i++) {

    let sliderImgEl = document.createElement("img");
    sliderImgEl.src = images [i];

    if (i === 0) {
        sliderImgEl.classList.add("d-block");
    }

    sliderContainerEl.append(sliderImgEl);
}

btnNext.addEventListener("click", function () {

    const oldImgEl = document.querySelector(`.slider-container :nth-child(${currentImgIndex + 1})`);

    oldImgEl.classList.remove("d-block");

    currentImgIndex++;
    
    if (currentImgIndex > images.length - 1) {
        currentImgIndex = 0;
    }

    const newImgEl = document.querySelector(`.slider-container :nth-child(${currentImgIndex + 1})`);
    
    newImgEl.classList.add("d-block");
})

btnPrev.addEventListener("click", function () {

    const oldImgEl = document.querySelector(`.slider-container :nth-child(${currentImgIndex + 1})`);

    oldImgEl.classList.remove("d-block");

    currentImgIndex--;

    if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }

    const newImgEl = document.querySelector(`.slider-container :nth-child(${currentImgIndex + 1})`);
    
    newImgEl.classList.add("d-block");
})
