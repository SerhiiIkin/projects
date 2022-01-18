const LIST_ROW = ".list__row";
const LIST_TEXT = ".list__text";
const BTN_DEL = "btn__del";

const listEl = document.querySelector(".list");
const inputEl = document.querySelector(".input");
const addBtn = document.querySelector(".btn");
let errorDiv = document.createElement("div");
const content = document.querySelector(".content").innerHTML;

addBtn.addEventListener("click", onAddBtnClick);
listEl.addEventListener("click", onListElClick);

function onAddBtnClick() {
    if (inputEl.value === "") {
        showError();
        return;
    }
    hideError();
    addTodo(inputEl.value);
    clear();
}

function onListElClick(e) {
    const row = e.target.closest(LIST_ROW);
    const textEl = e.target.closest(LIST_TEXT);

    if (e.target.classList.contains(BTN_DEL)) {
        row.remove();
    }

    if (textEl) {
        textEl.classList.toggle("color");
    }
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

function addTodo(message) {
    let textContentHTML = content;

    textContentHTML = textContentHTML.replace(`{{text}}`, message);

    listEl.insertAdjacentHTML("beforeend", textContentHTML);
}

function clear() {
    inputEl.value = null;
}
