const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');
const ar_tabs = toArray(tabs);

for (let tab of ar_tabs) {
  tab.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if (!e.target.className.includes("tab_active")) {
      let i = ar_tabs.indexOf(tab);

      let active = document.querySelector(".tab_active");
      let activeCont = document.querySelector(".tab__content_active");

      active.classList.remove("tab_active");
      activeCont.classList.remove("tab__content_active");

      e.target.classList.add("tab_active");
      contents[i].classList.add("tab__content_active");
    }
  });
}

function toArray(coll) {
  for (var i = 0, a = [], len = coll.length; i < len; i++) {
    a[i] = coll[i];
  }
  return a;
}