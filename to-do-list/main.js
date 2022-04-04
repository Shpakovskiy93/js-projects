const todoInputEl = document.querySelector('.todo__input');
const todoBtnEl = document.querySelector('.todo__btn');
const todoListEl = document.querySelector('.todo__list');
const filterTodoEl = document.querySelector('.todo__filter');

document.addEventListener('DOMContentLoaded', getTodos)
todoBtnEl.addEventListener('click', addTodo);
todoListEl.addEventListener('click', deleteAndCheck);
filterTodoEl.addEventListener('click', filterTodo);

function addTodo(event) {
    event.preventDefault();

    const newTodo = document.createElement('li');
    newTodo.classList.add('list__item');
    newTodo.innerText = todoInputEl.value;

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add('check__btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete__btn');
    
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo__item');
    todoItem.appendChild(newTodo);
    todoItem.appendChild(checkBtn);
    todoItem.appendChild(deleteBtn);

    saveLocalTodos(todoInputEl.value);

    todoListEl.appendChild(todoItem);
    todoInputEl.value = '';
}

function deleteAndCheck(e) {
    if(e.target.classList[0] === 'delete__btn') {
        e.target.parentElement.classList.add('fall');
        removeLocalTodos(e.target.parentElement);
        e.target.parentElement.addEventListener('transitionend', function(){
            e.target.parentElement.remove();
        });
    }

    if(e.target.classList[0] === 'check__btn') {
        e.target.parentElement.classList.toggle('checked');
    }
}

function filterTodo(e) {
    todoListEl.childNodes.forEach(todo => {
        switch(e.target.value) {
            case 'all':
                todo.style.display = 'flex';
            break;
            case 'completed':
                if(todo.classList.contains('checked')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
            break;
            case 'uncomleted':
                if(!todo.classList.contains('checked')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
            break;
        };
    });
}

function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(todo => {
        const newTodo = document.createElement('li');
        newTodo.classList.add('list__item');
        newTodo.innerText = todo;

        const checkBtn = document.createElement('button');
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';
        checkBtn.classList.add('check__btn');

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.classList.add('delete__btn');
        
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo__item');
        todoItem.appendChild(newTodo);
        todoItem.appendChild(checkBtn);
        todoItem.appendChild(deleteBtn);

        todoListEl.appendChild(todoItem);
    })    
}

function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}