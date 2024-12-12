let btnAdd = document.querySelector(".add");
let input = document.querySelector(".input");
let todos = document.querySelector(".todos");
let notodo = document.querySelector(".noTodo");

const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

btnAdd.addEventListener("click", addtask);

todos.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    deleteTask(e);
  }
  if (e.target.classList.contains("edit")) {
    editTask(e);
  }
});

function deleteTask(e) {
  let index = e.target.getAttribute("data-index");
  itemsArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayTask();
  location.reload()
}

function editTask(e) {
  let index = e.target.getAttribute("data-index");
  input.value = itemsArray[index];
  itemsArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayTask();
  location.reload()
}

function addtask() {
  let inputVal = input.value;
  if(inputVal.length>3){
    itemsArray.push(inputVal);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayTask();
    input.value = "";
  }
  else{
    alert("Todo Length must be greater than 3")
  }
  location.reload()
}

function displayTask() {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<li>
                    <div class="todo">
                        <input type="checkbox">
                        <p>${itemsArray[i]}</p>
                    </div>
                    <div class="icons">
                        <i class="fa-solid fa-pen edit" data-index="${i}"></i>
                        <i class="fa-regular fa-trash-can delete" data-index="${i}"></i>
                    </div>
                </li>`;
  }
  todos.innerHTML = items;
}

function displayNoTodoMsg(){
  if(itemsArray.length==0){
    notodo.style.visibility= "visible"
  }
  else{
    notodo.style.visibility= "hidden"
  }
}

window.onload = function () {
  displayTask();
  displayNoTodoMsg()
};
