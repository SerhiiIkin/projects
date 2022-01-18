const CONTACT_LIST = ".list__row";
const BTN_ADD = "btn__add";
const BTN_DEL = "btn__del";

const table = document.querySelector(".list");
const listContact = document.querySelector(".list__contacts");
const allInputs = document.querySelectorAll(".input");
const inputContainer = document.querySelector(".input__container");
const btnAdd = document.querySelector(".btn__add");
const btnDel = document.querySelectorAll(".btn__del");
let errorDiv = document.createElement("div");
const listItem = document.querySelector(".list__item").innerHTML;

btnAdd.addEventListener("click", onClickAddBtnClick);
table.addEventListener("click", onTableClick);
inputContainer.addEventListener("keypress", onInputPress);

function onClickAddBtnClick(e) {
    const contactList = getContactList();
    checkAndAdd(contactList);
}

function onTableClick(e) {
    if (e.target.classList.contains(BTN_DEL)) {
        const contactItem = getContactListItem(e.target);
        removeContactRow(contactItem);
    }
}

function onInputPress(e) {
    const contactList = getContactList();
    if (e.key === "Enter") {
        checkAndAdd(contactList);
    }
}

function getContactList() {
    const contact = {};

    allInputs.forEach((input) => {
        contact[input.name] = input.value;
    });

    return contact;
}

function checkAndAdd(contactList) {
    if (!checkInputs(contactList)) {
        showError();
        return;
    }

    hideError();
    addToList(contactList);
    clear();
}

function checkInputs(contactList) {
    return (
        !checkEmpty(contactList.name) &&
        !checkEmpty(contactList.surname) &&
        checkPhone(contactList.phone)
    );
}

function checkEmpty(str) {
    return str.trim() === "" && typeof str === "string";
}

function checkPhone(phone) {
    return !checkEmpty(phone) && !isNaN(phone);
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

function addToList(contactList) {
    let listItemHTML = listItem;

    for (let key in contactList) {
        if (Object.hasOwnProperty.call(contactList, key)) {
            listItemHTML = listItemHTML.replace(`{{${key}}}`, contactList[key]);
        }
    }

    listContact.insertAdjacentHTML("beforeend", listItemHTML);
}

function clear() {
    allInputs.forEach((item) => (item.value = null));
}

function getContactListItem(item) {
    return item.closest(CONTACT_LIST);
}

function removeContactRow(item) {
    item.remove();
}
