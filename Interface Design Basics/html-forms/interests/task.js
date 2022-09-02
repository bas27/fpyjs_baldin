const boxes = document.querySelectorAll('.interest__check')

for (let i = 0, len = boxes.length; i < len; i++) {
    let box = boxes[i]
    box.addEventListener('click', (e) => {
        e.target.closest('li').querySelectorAll('ul input[type=checkbox]').forEach( item => {
          item.checked = e.target.checked;
        })
      })
}