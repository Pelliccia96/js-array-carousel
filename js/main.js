const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
];

let currentImgIndex = 0

const sliderContainerEl = document.querySelector(".slider-container");
const sliderImgEl = document.querySelector(".slider-img");

const btnNext = document.getElementById("slider-btn-next");
const btnPrev = document.getElementById("slider-btn-prev");

sliderImgEl.src = images[currentImgIndex];

for (let i = 0; i < images.length; i++) {
/*     sliderImgEl.innerHTML += `<img src="${images[i]}">`; */
    let sliderImgEl = document.createElement("img");
    sliderImgEl.src = images [i];

    if (i === 0) {
        sliderImgEl.classList.add("d-block");
    }

    sliderContainerEl.append(sliderImgEl);
}

btnNext.addEventListener("click", function () {

/*     let currentIndexP = (images [i]):nth-child; */
    sliderImgEl.classList.remove("d-block");

    currentImgIndex++;

    const lastIndexAv = images.length - 1;
    
    if (currentImgIndex > lastIndexAv) {
        currentImgIndex = lastIndexAv;
    }

    sliderImgEl.classList.add("d-block");
    sliderImgEl.src = images[currentImgIndex];
})

btnPrev.addEventListener("click", function () {

    sliderImgEl.classList.remove("d-block");

    currentImgIndex--;

    if (currentImgIndex < 0) {
        currentImgIndex = 0;
    }

    sliderImgEl.classList.add("d-block");
    sliderImgEl.src = images[currentImgIndex];
})
