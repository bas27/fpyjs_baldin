const btn_add = document.querySelector('.tasks__add')
const input = document.querySelector('.tasks__input')

// Отображение задач на странице
const storTasks = JSON.parse(localStorage.getItem('storTasks')) || [];
const taskList = document.querySelector('.tasks__list');
storTasks.forEach(storTask => {
  const div = document.createElement('div');
  div.className = 'task';

  const div2 = document.createElement('div');
  div2.className = 'task__title';
  div2.textContent = storTask;

  div.appendChild(div2);
  div.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>');
  taskList.appendChild(div);

  // Добавление обработчика на кнопку удаления
  const remove = div.querySelector('.task__remove');
  remove.addEventListener('click', () => {
    div.remove();

    // Обновление списка задач в localStorage
    const updatedTasks = storTasks.filter(t => t !== storTask);
    localStorage.setItem('storTasks', JSON.stringify(updatedTasks));
  });
});

function newTask(e) {
  e.preventDefault();

  const div = document.createElement('div');
  div.className = 'task';

  const div2 = document.createElement('div');
  div2.className = 'task__title';
  div2.textContent = input.value;

  div.appendChild(div2);
  div.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>');

  const content = input.value;
  if (input.value) {
    taskList.appendChild(div);
    const storTasks = JSON.parse(localStorage.getItem('storTasks')) || [];
    storTasks.push(content);
    localStorage.setItem('storTasks', JSON.stringify(storTasks));
  }

console.log(content)

  const remove = div.querySelector('.task__remove');
  remove.addEventListener('click', () => {
    div.remove();

    // Обновление списка задач в localStorage
    const updatedTasks = storTasks.filter(t => t !== content);
    localStorage.setItem('storTasks', JSON.stringify(updatedTasks));
  });

  input.value = '';
}

input.addEventListener('keydown', (e) => {
  if (e.code == 'Enter') {
    newTask(e);
  }
});

btn_add.addEventListener('click', newTask);

