const table = document.querySelector(".list");
const allInputs = document.querySelectorAll(".input");
const inputContainer = document.querySelector(".input__container");
const addBtn = document.querySelector(".btn");
let errorDiv = document.createElement("div");
const listItem = document.querySelector(".list__item");

addBtn.addEventListener("click", onClickBtn);

function onClickBtn() {
    let writtenName = allInputs[0].value;
    let writtenSurName = allInputs[1].value;
    let writtenPhone = allInputs[2].value;

    if (checkInputs(writtenName, writtenSurName, writtenPhone)) {
        showError();
        return;
    }

    hideError();
    addToList(writtenName, writtenSurName, writtenPhone);
    clear();
}

function checkInputs(writtenName, writtenSurName, writtenPhone) {
    return (
        writtenName === "" ||
        writtenSurName === "" ||
        writtenPhone === "" ||
        isNaN(writtenPhone)
    );
}

function showError() {
    errorDiv.textContent = "Enter text in input!";
    errorDiv.classList.add("red", "nyDiv");
    errorDiv.classList.remove("hide");
    inputContainer.insertAdjacentElement("beforeend", errorDiv);
}

function hideError() {
    errorDiv.classList.remove("red", "nyDiv");
    errorDiv.classList.add("hide");
}

function addToList(name, surname, phone) {
    const listItemHTML = listItem.innerHTML
        .replace("{{name}}", name)
        .replace("{{surname}}", surname)
        .replace("{{phone}}", phone);

    table.insertAdjacentHTML("beforeend", listItemHTML);
}

function clear() {
    allInputs.forEach((item) => (item.value = null));
}
