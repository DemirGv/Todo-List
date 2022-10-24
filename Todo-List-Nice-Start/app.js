//Select DOM 
"use strict"


// "Step 1"
// "Grabb the todo-input"
var todoInput = document.getElementById('todoInput');
// "Grabb the todo-button"
var todoButton = document.getElementById('todoButton');
// "Grabb the todo-list"
var todoList = document.getElementById('todoList');
// "Grabb the filter-todo"
var filterTodo = document.getElementById('filterTodo');

//Event Listeners

//Step 2 Add Eventlistners here like add todo
todoInput.addEventListener('input', addTodo);

//Functions // Step 3 create your li

function addTodo(event){
  // Prevent form from submitting or reloading Step 4
  console.log(event);
  event.preventDefault();
// Create a todo div-> and add todo          Step 4
let todoWrapperElement = document.createElement('div');
// Create li Step 4
let todoList = document.createElement('li');
// Create Completed Button
let completedButton = document.createElement('p');
completedButton.className = 'completed';
completedButton.addEventListener('click', filterTodo)
return completedButton;
// Create trash button
let trashButton = document.createElement('p');
trashButton.className = 'trash';
trashButton.addEventListener('click', deleteTodo);
return trashButton;
// attach final Todo
}

function deleteTodo(e){
  e.target.parentElement.remove();
}

function filterTodo(e){}
// use switch here as we have all, completed and uncompleted
function saveLocalTodos(todo){}

function removeLocalTodos(todo){}

function getTodos(){}