const links = document.querySelectorAll(".menu__link");

for (let i = 0, len = links.length; i < len; i++) {
  let link = links[i];

  link.addEventListener("click", function (e) {
    let nextSibling = e.target.nextElementSibling;

    if (nextSibling) {
      e.preventDefault();

      nextSibling.className.includes("menu_active")
        ? nextSibling.classList.remove("menu_active")
        : nextSibling.classList.add("menu_active");
    }
  });
}
