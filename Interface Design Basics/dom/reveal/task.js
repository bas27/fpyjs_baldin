const reveal = document.querySelectorAll('.reveal')

window.addEventListener('scroll', isVisisble(reveal));

  function isVisisble(els) {
    for (let el of els) {
        const { top, bottom } = el.getBoundingClientRect()

        el.classList.add('reveal_active')
  }}