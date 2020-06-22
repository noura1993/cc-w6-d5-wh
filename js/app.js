document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.querySelector('#form');
    todoForm.addEventListener('submit', handleNewTodo);

    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', handleDeleteAllClick);
  });
  
const handleNewTodo = function (event) {
    event.preventDefault();
  
    const todo = createTodo(event.target);
    const todoList = document.querySelector('#todo-list');
    todoList.appendChild(todo);
    
    event.target.reset();
};

const createTodo = function (form) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const todo = document.createElement('input');
    todo.classList.add('notes');
    todo.readOnly = true;
    todo.value = `${form.title.value}:  ${form.notes.value}`;
    todoItem.appendChild(todo);

    const checkTodo = document.createElement('input');
    checkTodo.classList.add('button');
    checkTodo.value = 'Done';
    checkTodo.type = 'button';
    todoItem.appendChild(checkTodo);
    checkTodo.addEventListener('click', handleCheckTodo);

    return todoItem;
};

const handleDeleteAllClick = function (event) {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';
};

const handleCheckTodo = function (event) {
 const todo = event.target.parentNode.children[0];
 if(todo.style.textDecoration === 'line-through') {
    todo.style.textDecoration = '';
    event.target.value = 'Done';
 }else {
    todo.style.textDecoration = 'line-through';
    event.target.value = 'Undo';

 }
};
