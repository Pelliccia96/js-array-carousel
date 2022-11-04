const images = [
    "../img/01.webp",
    "../img/02.webp",
    "../img/03.webp",
    "../img/04.webp",
    "../img/05.webp",
];

let currentImgIndex = 0

const sliderContainerEl = document.querySelector(".slider-container");
const sliderImgEl = document.querySelector(".slider-img");

const btnPrev = document.getElementById("slider-btn-prev");
const btnNext = document.getElementById("slider-btn-next");

sliderImgEl.src = images[currentImgIndex];
sliderImgEl.innerHTML = `${images[0]}`;
