const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('li > a');

dropdownValue.addEventListener("click", () => {
  dropdownList.className.includes("dropdown__list_active")
    ? dropdownList.classList.remove("dropdown__list_active")
    : dropdownList.classList.add("dropdown__list_active");
});

for (let link of dropdownItem) {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownValue.textContent = e.target.textContent;
        dropdownList.classList.remove("dropdown__list_active")
    })
}

