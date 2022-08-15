const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value')
const dropdownItem = document.querySelectorAll('li > a')
// const arItem = Array.from(dropdownItem)

dropdownValue.addEventListener("click", () => {
  dropdownList.className.includes("dropdown__list_active")
    ? dropdownList.classList.remove("dropdown__list_active")
    : dropdownList.classList.add("dropdown__list_active");


});


for (let i = 0, len = dropdownItem.length; i < len; i++) {
    curLink = dropdownItem[i]
    curLink.addEventListener('click', function(e) {
      console.log(dropdownValue.textContent)
      
      // dropdownValue.textContent = e.textContent
      dropdownList.classList.remove('dropdown__list_active')
      e.stopPropagation()
        })
}
