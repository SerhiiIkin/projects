import ContactApi from "./ContactApi.js";

const CONTACT_LIST = ".list__row";
const BTN_DEL = "btn__del";
const BTN_EDIT = "btn__edit";

const table = document.querySelector(".list");
const listContact = document.querySelector(".list__contacts");
const allInputs = document.querySelectorAll(".input");
const inputContainer = document.querySelector(".input__container");
const form = document.querySelector("#form");
const btnSend = document.querySelector(".btn__add");
let errorDiv = document.createElement("div");
const listItem = document.querySelector(".list__item").innerHTML;

let serverContactList = [];
let contactId = null;

showList();

form.addEventListener("submit", onSubmitForm);
table.addEventListener("click", onTableClick);

function showList() {
    ContactApi.contactList()
        .then((contactList) => {
            getServerContactList(contactList);
            getContactListHtml(contactList);
        })
        .catch(handleError);
}

function getServerContactList(contactList) {
    serverContactList = contactList;
}

function getContactListHtml(contactList) {
    const html = contactList.map(contactListHtml).join("");

    listContact.insertAdjacentHTML("beforeend", html);
}

function contactListHtml(contactList) {
    return listItem
        .replace("{{firstName}}", contactList.firstName)
        .replace("{{lastName}}", contactList.lastName)
        .replace("{{phone}}", contactList.phone)
        .replace("{{id}}", contactList.id);
}

function handleError(e) {
    console.log(e.message);
}

function onSubmitForm(e) {
    e.preventDefault();

    checkContactList();
}

function getContactList() {
    const contact = {};

    allInputs.forEach((input) => {
        contact[input.name] = input.value;
    });

    return contact;
}

function checkContactList() {
    const contactList = getContactList();
    let newContactList = getNewContact(contactList);

    if (!checkInputs(contactList)) {
        showError();
        return;
    }

    hideError();
    if (newContactList.id) {
        updateContact(newContactList);
    } else {
        addContact(contactList);
    }

    clear();
}

function checkInputs(contactList) {
    return (
        !checkEmpty(contactList.firstName) &&
        !checkEmpty(contactList.lastName) &&
        checkPhone(contactList.phone)
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

function updateContact(newContactList) {
    ContactApi.updateContact(newContactList.id, newContactList)
        .then(editHtmlContact)
        .catch(handleError);
}

function addContact(contactList) {
    ContactApi.createContact(contactList)
        .then(addHtmlContact)
        .catch(handleError);
}

function clear() {
    allInputs.forEach((item) => (item.value = null));
    contactId = null;
}

/*------------------------------------------*/

function onTableClick(e) {
    const contactItem = getContactListItem(e.target);

    if (e.target.classList.contains(BTN_DEL)) {
        removeContactList(contactItem);
    }
    if (e.target.classList.contains(BTN_EDIT)) {
        editContactList(contactItem);
    }
}

function getContactListItem(item) {
    return item.closest(CONTACT_LIST);
}

function removeContactList(item) {
    const id = getId(item);

    ContactApi.deleteContact(id).catch(handleError);

    item.remove();
}

function editContactList(contactItem) {
    const id = getId(contactItem);
    const contact = getContactById(id);
    let contactValue = Object.values(contact);
    contactId = id;

    for (let i = 0; i < allInputs.length; i++) {
        let el = allInputs[i];
        let item = contactValue[i];
        el.value = item;
    }

    btnSend.textContent = "Save and Send";
}

function checkEmpty(str) {
    return str.trim() === "" && typeof str === "string";
}

function checkPhone(phone) {
    return !checkEmpty(phone) && !isNaN(phone);
}

function addHtmlContact(contactList) {
    let listItemHTML = contactListHtml(contactList);

    listContact.insertAdjacentHTML("beforeend", listItemHTML);
}

function editHtmlContact(contactList) {
    let listItemHTML = contactListHtml(contactList);
    let listRow = document.querySelectorAll(CONTACT_LIST);

    listRow.forEach((listEl) => {
        if (listEl.dataset.id === contactList.id) {
            let previousElement = listEl.previousElementSibling;
            listEl.remove();
            previousElement.insertAdjacentHTML("afterend", listItemHTML);
        }
    });

    btnSend.textContent = "Send";
}

function getNewContact(contactList) {
    const contact = getContactById(contactId);
    return {
        ...contact,
        firstName: contactList.firstName,
        lastName: contactList.lastName,
        phone: contactList.phone,
    };
}

function getId(item) {
    return item.dataset.id;
}

function getContactById(id) {
    return serverContactList.find((contact) => contact.id === id);
}
