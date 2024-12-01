const inputTodo = document.querySelector('.js-name-input');
const inputText = document.querySelector('.todo-list');

// let todoList = ['create code', 'Watch movie'];
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];



renderTodoList();


function renderTodoList() {
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const html = `<p> ${todoList[i]}</p>`;
    todoListHtml += html;
  }

  console.log(todoListHtml);
  inputText.innerHTML = todoListHtml;
}

function clearTodoList() {
  inputText.innerHTML = '';
  todoList = [];
  localStorage.removeItem('todoList');
}

function addTodo(){
  let val = inputTodo.value;
  todoList.push(val);
  console.log(todoList);
  inputTodo.value = '';

  localStorage.setItem('todoList',JSON.stringify(todoList));

  renderTodoList();
}

function keyEnter(e){
  if(e.keyCode == 13){
    addTodo();
  }
}
