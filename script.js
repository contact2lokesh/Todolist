const toDoItems = [];
const inputField = document.getElementById("new_item");
const button = document.getElementById("addToDo");
const result = document.getElementById("list_item");
const clearList = document.getElementById("clearListBtn");
var tempIndex = null;


button.addEventListener("click", addToDo);

function addToDo() {
    if (inputField.value == '') {
        alert("please Enter your task");
    } else {
        if (tempIndex == null) {
            toDoItems.push(inputField.value);
        } else {
            toDoItems[tempIndex] = inputField.value;
            tempIndex = null;
        }
        renderTodoList();
    }
}

function renderTodoList() {
    let li = '';     //[curr.element][index]
    toDoItems.forEach(function (toDo, index) {

        li += `<li><input type="checkbox"><label for="task_1">${toDo}</label> <button onclick="deleteToDo('${index}')">Delete</button> <button onclick="editToDo('${index}')">Edit</button></li>`;

    });
    result.innerHTML = li;
}


function deleteToDo(index) {

    toDoItems.splice(index, 1,);
    renderTodoList();


}

function editToDo(index) {
    // console.log(index);
    let newInput = toDoItems[index];
    inputField.value = newInput;
    tempIndex = index;
    inputField.focus();
}

clearList.addEventListener("click", deleteAll);

function deleteAll() {
    if (toDoItems.length == 0) {
        alert("No task to remove")
    } else {
        const arryLength = toDoItems.length
        toDoItems.splice(0, arryLength);
        renderTodoList();
    }
}
