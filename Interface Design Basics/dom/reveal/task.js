let last_known_scroll_position = 0;
let ticking = false;

function visible(scroll_pos) {
  const reveal = document.querySelectorAll(".reveal");
  for (let rev of reveal) {
    const { top, bottom } = rev.getBoundingClientRect();
    top < 0 || bottom > window.innerHeight
      ? rev.classList.remove("reveal_active")
      : rev.classList.add("reveal_active");
  }
}
window.addEventListener("scroll", (e) => {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      visible(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
