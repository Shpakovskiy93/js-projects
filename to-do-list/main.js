const todoFormEl = document.querySelector(".todo__form");
const addInputEl = document.querySelector(".add__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemsEl = document.querySelectorAll(".todo__item");


function createTodoItem(title) {
    //===================================CREATE ELEMENTS=================
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = "input__checkbox";

    const label = document.createElement('label');
    label.innerText = title;
    label.className = "title";

    const editInput = document.createElement('input')
    editInput.type = 'text';
    editInput.className = "textfield";

    const editBtn = document.createElement('button')
    editBtn.innerText = "change";
    editBtn.className = 'edit';

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "deleteBtn";
    deleteBtn.className = "delete";

    const listItem = document.createElement('li');
    listItem.className = "todo__item";

    //===============================================APPEND ELEMENT IN LI===============
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    //======================================BIND EVENTS===============
    bindEvents(listItem);
    //=================================================return===================
    return listItem;
}

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector(".input__checkbox");
    const editBtn = todoItem.querySelector(".edit");
    const deleteBtn = todoItem.querySelector(".delete");

    checkbox.addEventListener('change', toggleTodoItem)
    editBtn.addEventListener('click', editTodoItem);
    deleteBtn.addEventListener('click', deleteTodoItem);
}

function addTodoItem(event) {
    event.preventDefault();

    if (!addInputEl.value) return alert('you need enter the name task');

    const todoItem = createTodoItem(addInputEl.value);
    todoListEl.appendChild(todoItem);
    addInputEl.value = '';

}

function toggleTodoItem() {
    const listItem = this.parentNode;
    listItem.classList.toggle('completed')
}

function editTodoItem() {

}

function deleteTodoItem() {

}

todoFormEl.addEventListener('submit', addTodoItem);