const listEl = document.querySelector(".list");
const inputEl = document.querySelector(".input");
const addBtn = document.querySelector(".btn");
let errorDiv = document.createElement("div");

addBtn.addEventListener("click", onClickBtn);

function onClickBtn() {
    if (inputEl.value === "") {
        showError();
        return;
    }
    hideError();
    addTodo(inputEl.value);
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

function addTodo(message) {
    let newLiEl = document.createElement("li");
    newLiEl.textContent = message;
    listEl.append(newLiEl);
}

function clear() {
    inputEl.value = null;
}
