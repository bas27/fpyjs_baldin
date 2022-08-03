const main = document.getElementById("modal_main");
main.classList.add("modal_active");
const modalSuccess = document.getElementById("modal_success");
const btnShSuccess = document.querySelector(".show-success");
const close = document.getElementsByClassName("modal__close_times");

btnShSuccess.addEventListener("click", function () {
  main.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
});

for (let i = 0, len = close.length; i < len; i++) {
  close[i].onclick = () => {
    main.style.display = "none";
    modalSuccess.style.display = "none";
  };
}
