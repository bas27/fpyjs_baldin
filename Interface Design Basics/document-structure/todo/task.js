const btn_add = document.querySelector('.tasks__add')
const input = document.querySelector('.tasks__input')


// btn_add.addEventListener('keydown', (e) => {
//   console.log(e.code, e.key)
//   if (e.code == 'Enter') {

//   }
// })
      // <div class="task">
      //   <div class="task__title">
      //     {input.value}
      //   </div>
      //   <a href="#" class="task__remove">&times;</a>
      // </div>


function newTask() {
  const task = document.createElement('<div class="task"><div class="task__title"></div></div><a href="#" class="task__remove">&times;</a>')
  const  text = document.createTextNode(input.value)
  const taskList = document.querySelector('.tasks__list')
  task.appendChild(text)
  input.value ? 
    
    taskList.appendChild(task)
    :
    console.log('Отсутствует ввод')
}

input.addEventListener('keydown', (e) => {
  if (e.code == 'Enter') {
    newTask()
  }
})