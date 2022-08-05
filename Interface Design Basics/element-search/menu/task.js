const links = document.querySelectorAll(".menu__link");

for (let i = 0, len = links.length; i < len; i++) {
  let link = links[i];
  link.addEventListener("click", function (e) {
    let active = document.querySelector(".menu_active");
    if (active) {
      active.classList.remove("menu_active");
    }
    let nextSibling = e.target.nextElementSibling;

    if (nextSibling) {
      e.preventDefault();
      nextSibling.classList.add("menu_active");
    }
  });
}
