import TodoApi from "./TodoApi.js";

const LIST_ROW = ".list__row";
const LIST_TEXT = "list__text";
const BTN_DEL = "btn__del";
const CHANGE_BG_EL = "color";

const listEl = document.querySelector(".list");
const inputEl = document.querySelector(".input");
const form = document.querySelector(".form");
let errorDiv = document.createElement("div");
const content = document.querySelector(".content").innerHTML;

showList();

form.addEventListener("submit", onFormSubmit);
listEl.addEventListener("click", onListElClick);

async function showList() {
    try {
        const todolist = await TodoApi.todoList();
        getTodoListHtml(todolist);
    } catch (e) {
        handleError(e);
    }

    //TodoApi.todoList().then(getTodoListHtml).catch(handleError);
}

function getTodoListHtml(todoList) {
    const html = todoList.map(todoHtmlList).join("");

    listEl.insertAdjacentHTML("beforeend", html);
}

function handleError(e) {
    console.log(e.message);
}

function todoHtmlList(todoList) {
    const trueStatus = todoList.status ? CHANGE_BG_EL : "";

    return content
        .replace("{{title}}", todoList.title)
        .replace("{{id}}", todoList.id)
        .replace("{{status}}", todoList.status)
        .replace("{{trueStatus}}", trueStatus);
}

function onFormSubmit(e) {
    e.preventDefault();

    if (inputEl.value === "") {
        showError();
        return;
    }

    hideError();
    addTodo();
    clear();
}

function showError() {
    errorDiv.textContent = "Enter text in input!";
    errorDiv.classList.add("red", "nyDiv");
    errorDiv.classList.remove("hide");
    inputEl.after(errorDiv);
}

function hideError() {
    errorDiv.classList.remove("red", "nyDiv");
    errorDiv.classList.add("hide");
}

async function addTodo() {
    let newRow = {
        status: false,
        title: inputEl.value,
    };

    try {
        const createRow = await TodoApi.createRow(newRow);

        let textContentHTML = content
            .replace("{{id}}", createRow.id)
            .replace(`{{title}}`, createRow.title)
            .replace("{{trueStatus}}", createRow.status)
            .replace("{{status}}", createRow.status);

        listEl.insertAdjacentHTML("beforeend", textContentHTML);
    } catch (e) {
        handleError(e);
    }
}

function clear() {
    inputEl.value = null;
}

function onListElClick(e) {
    const row = e.target.closest(LIST_ROW);

    if (e.target.classList.contains(BTN_DEL)) {
        deleteTodo(row);
    }

    if (e.target.classList.contains(LIST_TEXT)) {
        changeTodoStatus(row);
    }
}

async function deleteTodo(el) {
    const id = getId(el);

    try {
        const deleteTodo = await TodoApi.deleteTodo(id);
    } catch (e) {
        handleError(e);
    }

    el.remove();
}

async function changeTodoStatus(el) {
    const textEl = el.querySelector("." + LIST_TEXT);
    const status = textEl.dataset.status !== "true";
    const id = getId(el);

    const updateRow = await TodoApi.updateRow(id, { status });

    textEl.dataset.status = status;
    textEl.classList.toggle(CHANGE_BG_EL);
}

function getId(el) {
    return el.querySelector("." + LIST_TEXT).dataset.id;
}
