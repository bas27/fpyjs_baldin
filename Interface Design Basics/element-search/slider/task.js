const prev = document.querySelector('.slider__arrow_prev')
const next = document.querySelector('.slider__arrow_next')


let slideIndex = 1;

showImg(slideIndex)

prev.addEventListener('click', prevClick)
next.addEventListener('click', nextClick)


function prevClick() {
    showImg(slideIndex--)
}

function nextClick() {
    showImg(slideIndex++)
}

function realImg(i) {
    showImg(slideIndex = i)
}

function showImg(i) {
    const divSliders = document.querySelectorAll('div.slider__item')
    const active = document.querySelector('.slider__item_active')
    let len = divSliders.length
    if (i > len) {
        slideIndex = 1;
    }
    
    if (i < 1) {
        slideIndex = len
    }

    let slide = divSliders[slideIndex]
    active.classList.remove('slider__item_active')
    slide.classList.add('slider__item_active')
    console.log(slideIndex)
    
}

// Array.from(ar, x => {

//     }
// let ar = toArray(divSliders)
// function toArray(coll) {
//     let  a = [];
//     for (let i = 0, len = coll.length; i < len; i++) {
//         a[i] = coll[i];
//     }
//     return a;
// }

// let ar = toArray(divSliders)
// console.log(ar)