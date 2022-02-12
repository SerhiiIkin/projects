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

form.addEventListener("submit", onFormClick);
listEl.addEventListener("click", onListElClick);

function showList() {
    TodoApi.todoList().then(getTodoListHtml).catch(handleError);
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

function onFormClick(e) {
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

function addTodo() {
    let textContentHTML = content.replace(`{{title}}`, inputEl.value);

    listEl.insertAdjacentHTML("beforeend", textContentHTML);

    let newRow = {
        status: false,
        title: inputEl.value,
    };

    TodoApi.createRow(newRow).then(reload).catch(handleError);
}

function reload() {
    location.reload();
}

function clear() {
    inputEl.value = null;
}

function onListElClick(e) {
    const row = e.target.closest(LIST_ROW);

    if (e.target.classList.contains(BTN_DEL)) {
        deleteRow(row);
    }

    if (e.target.classList.contains(LIST_TEXT)) {
        changeTextStatus(row);
    }
}

function deleteRow(el) {
    const id = getId(el);

    TodoApi.deleteRow(id).catch(handleError);

    el.remove();
}

function changeTextStatus(el) {
    const textEl = el.querySelector("." + LIST_TEXT);
    const status = textEl.dataset.status !== "true";
    const id = getId(el);

    TodoApi.updateRow(id, { status });

    textEl.dataset.status = status;
    textEl.classList.toggle(CHANGE_BG_EL);
}

function getId(el) {
    return el.querySelector("." + LIST_TEXT).dataset.id;
}
