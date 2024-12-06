const inputTodo = document.querySelector('.js-name-input');
const inputText = document.querySelector('.todo-list');
const inputDate = document.querySelector('.js-due-date-iput');


// let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

let todoList = [{
  name: 'create code',
  dueDate: '2022-12-22'
},{
  name: 'wash dishes',
  dueDate:'2022-12-22'
}];


renderTodoList();


function renderTodoList() {
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    const {name,dueDate} = todoObj;


    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
      todoList.splice(${i},1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHtml += html;
  }

  inputText.innerHTML = todoListHtml;
}

function clearTodoList() {
  inputText.innerHTML = '';
  todoList = [];
  localStorage.removeItem('todoList');
}

function addTodo(){
  let val = inputTodo.value;
  let dueDate = inputDate.value;

  todoList.push({
    // dueDate: dueDate
    name: val,
    dueDate
  });

  inputTodo.value = '';

  localStorage.setItem('todoList',JSON.stringify(todoList));

  renderTodoList();
}

function keyEnter(e){
  if(e.code == 'Enter'){
    addTodo();
  }
}
