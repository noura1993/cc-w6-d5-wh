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
    const todo = document.createElement('li');
    todo.classList.add('todo-item');
  
    const title = document.createElement('h2');
    title.innerHTML = `${form.title.value}: &nbsp; ${form.notes.value}`;
    todo.appendChild(title);
  
    return todo;
};