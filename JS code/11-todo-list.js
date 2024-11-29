const todoList = [];
const inputTodo = document.querySelector('.js-name-input');


function addTodo(){
  let val = inputTodo.value;
  todoList.push(val);
  console.log(todoList);
  inputTodo.value = '';
}

function keyEnter(e){
  if(e.keyCode == 13){
    addTodo();
  }
}
