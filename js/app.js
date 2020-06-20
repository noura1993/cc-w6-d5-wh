document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.querySelector('#form');
    todoForm.addEventListener('submit', handleNewTodo);
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
    todo.classList.add('todo-item-text');
    todo.readOnly = true;
    todo.value = `${form.title.value}:  ${form.notes.value}`;
    todoItem.appendChild(todo);
  
    return todoItem;
};
