//Select DOM 
"use strict"
// "Step 1"
// "Grabb the todo-input"
const todoInput = document.querySelector('.todo-input');
// "Grabb the todo-button"
const todoButton = document.querySelector('.todo-button');
// "Grabb the todo-list"
const todoList = document.querySelector('.todo-list');
// "Grabb the filter-todo"
const filterTodo = document.querySelector('.filter-todo');
//Event Listeners
//Step 2 Add Eventlistners here like add todo
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteTodo);
filterTodo.addEventListener('click', filterTodo);
//Functions // Step 3 create your li
function addTodo(event){
  // Prevent form from submitting or reloading
  event.preventDefault();
// Create a todo div-> and add todo
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
// Create li
  const newTodo = document.createElement('li');
  newTodo.innerHTML=todoInput.value;
// Create Completed Button
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //ADD todo to localstorage
saveLocalTodos(todoInput.value);
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e){
  const item = e.target;
  //delete todo
  if(item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitioned", function() {
      todo.remove();
    });
  }
}

function filterTodo(e){
  console.log("hi");
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";       
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";       
          } else {
            todo.style.display = "none";
          }
          break;
  }  
});
}

function saveLocalTodos(todo){
  let todos;
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); 
  }
  todo.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo){
  let todos;
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); 
  }
  //console.log(todo);
  const todoIndex = todo.children[0].innerHTML;
  todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); 
  }
  todos.forEach(function(todo) {
   // Create a todo div-> and add todo
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
// Create li
  const newTodo = document.createElement('li');
  newTodo.innerHTML=todo;
// Create Completed Button
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
    
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv); 
  });
}