let btnAdd = document.querySelector(".add");
let input = document.querySelector(".input");
let todos = document.querySelector(".todos");
let deleteBtn = document.querySelectorAll(".delete");
let editBtn = document.querySelectorAll(".edit");
// const itemsArray = [];
const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

btnAdd.addEventListener("click", addtask);

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("delete is clickedd...");
    deleteTask();
  });
});

editBtn.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    console.log("edit is clickedd...");
    editTask(e);
  });
});

function deleteTask() {
  console.log("delete");
  itemsArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayTask();
}

function editTask(e) {
  console.log("editing......");
  let todo = e.target.parentElement.parentElement.querySelector("p");
  input.value = todo.innerHTML;
}

function addtask() {
  let inputVal = input.value;
  itemsArray.push(inputVal);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayTask();
  input.value=""
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
                        <i class="fa-solid fa-pen edit"></i>
                        <i class="fa-regular fa-trash-can delete"></i>
                    </div>
                </li>`;
  }
  todos.innerHTML = items;
}

window.onload = function () {
  displayTask();
};
