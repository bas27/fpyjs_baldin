// const interest = document.querySelector('.interest__check')

const input = document.querySelectorAll('.interest__check')
// interest.closest('li').children[1].children[0].checked=true
// console.log(interest.closest('li').children[1].children[0].checked)

function CheckAll() {
  for (let i = 0; i < document.name.elements.length; i++) {
    if (document.name.check.checked == true) {
      document.name.elements[i].checked = true;
    } else {
      document.name.elements[i].checked = false;
    }
  }
}

for (let i = 0, len = input.length; i < len; i++) {
    input[i].addEventListener('click', ()  => {
        console.log(input[i].checked)
        if (input[i].checked === true) {
            console.log('Привет')
        }
        // if ()


        // console.log(input[i].closest('ul > .interests_active'));

        // for (let k = 0; k < elements.length; k++) {
        //     let parent = elements.children[k].closest('.interests_active')
        //     if (parent) {
        //         parent.children.input.checked = true
        //     }
        //     console.log(elements.children[k].closest('.interests_active'));
        //     elements.children[k].checked = true

        // }
    })
}