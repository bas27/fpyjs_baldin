const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const divSliders = document.querySelectorAll("div.slider__item");

prev.addEventListener("click", preShowSlide);
next.addEventListener("click", nextShowSlide);

function nextShowSlide() {
  let active = document.querySelector(".slider__item_active");
  let index = getIndex(divSliders);

  let len = divSliders.length;
  active == divSliders[len - 1] ? (index = 0) : index++;

  let nextSlide = divSliders[index];

  active.classList.remove("slider__item_active");
  nextSlide.classList.add("slider__item_active");
}

function preShowSlide() {
  let active = document.querySelector(".slider__item_active");
  let index = getIndex(divSliders);

  let len = divSliders.length;
  active == divSliders[0] ? (index = len - 1) : index--;

  let nextSlide = divSliders[index];

  active.classList.remove("slider__item_active");
  nextSlide.classList.add("slider__item_active");
}

function getIndex(coll) {
  for (let k = 0, len = coll.length; k < len; k++) {
    if (coll[k].className.includes("slider__item_active")) {
      return k;
    }
  }
}
