let rotate = (val) => {setInterval(newNext, val)}

function newNext() {
    let span = document.querySelector('.rotator')
    
        let active = document.querySelector('span.rotator__case_active')
        let next = active.nextElementSibling
        
        let color = active.dataset.color
        active.setAttribute("style", "color")
        active.style.color = color
        
        if (active == span.lastElementChild) {
            active.classList.remove('rotator__case_active')
            next = span.firstElementChild

        }

        active.classList.remove('rotator__case_active')
        next.setAttribute("style", "color")
        let colorNext = next.dataset.color
        next.style.color = colorNext
        next.classList.add('rotator__case_active')

}

let speed = () => {
    let active = document.querySelector('span.rotator__case_active')
    return active.dataset.speed
}

rotate(speed())