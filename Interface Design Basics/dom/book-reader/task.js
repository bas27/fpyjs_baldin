document.addEventListener("click", (e) => {
  e.preventDefault();

  let active = document.querySelector(".font-size_active");
  let content = document.querySelector(".book__content");

  switch (e.target.dataset.size) {
    case "small":
      active.classList.remove("font-size_active");
      e.target.classList.add("font-size_active");
      if (content.className.includes("book_fs-big")) {
        content.classList.remove("book_fs-big");
      }
      content.classList.add("book_fs-small");
      break;

    case "big":
      active.classList.remove("font-size_active");
      e.target.classList.add("font-size_active");
      if (content.className.includes("book_fs-small")) {
        content.classList.remove("book_fs-small");
      }
      content.classList.add("book_fs-big");
      break;

    default:
      active.classList.remove("font-size_active");
      e.target.classList.add("font-size_active");
      if (content.className.includes("book_fs-small")) {
        content.classList.remove("book_fs-small");
      }
      if (content.className.includes("book_fs-big")) {
        content.classList.remove("book_fs-big");
      }
      break;
  }
});
