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
        .then((contact) => {
            setServerContactList(contact);
            showContactListHtml(contact);
        })
        .catch(handleError);
}

function setServerContactList(contact) {
    serverContactList = contact;
}

function showContactListHtml(contact) {
    const html = contact.map(contactHtml).join("");

    listContact.insertAdjacentHTML("beforeend", html);
}

function contactHtml(contact) {
    return listItem
        .replace("{{firstName}}", contact.firstName)
        .replace("{{lastName}}", contact.lastName)
        .replace("{{phone}}", contact.phone)
        .replace("{{id}}", contact.id);
}

function onSubmitForm(e) {
    e.preventDefault();

    const contact = getContact();

    if (!checkContact(contact)) {
        showError();
        return;
    }

    hideError();

    if (contact.id) {
        updateContact(contact);
    } else {
        addContact(contact);
    }
}

function getContact() {
    const contact = {};
    const serverContact = getContactById(contactId);

    allInputs.forEach((input) => {
        contact[input.name] = input.value;
    });

    return {
        ...serverContact,
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
    };
}

function checkContact(contact) {
    return (
        !checkEmpty(contact.firstName) &&
        !checkEmpty(contact.lastName) &&
        checkPhone(contact.phone)
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

function updateContact(contact) {
    ContactApi.updateContact(contact.id, contact)
        .then((contact) => {
            editHtmlContact(contact);
            clear();
        })
        .catch((e) => {
            console.log(e.message);
            BtnUpdateAgain(contact);
        });
}

function BtnUpdateAgain(contact) {
    let listRow = getListRow();
    let btn = btnAgain();

    listRow.forEach((listEl) => {
        if (listEl.dataset.id === contact.id) {
            listEl.append(btn);
        }
    });

    btn.addEventListener("click", updateAgain);
}

function updateAgain(e) {
    let contact = getContact();

    ContactApi.updateContact(contact.id, contact)
        .then((contact) => {
            editHtmlContact(contact);
            clear();
            e.target.remove();
        })
        .catch(handleError);
}

function editHtmlContact(contact) {
    let listItemHTML = contactHtml(contact);
    let listRow = getListRow();

    listRow.forEach((listEl) => {
        if (listEl.dataset.id === contact.id) {
            listEl.outerHTML = listItemHTML;
        }
    });

    btnSend.textContent = "Send";
}

function addContact(contact) {
    addHtmlContact(contact);
    clear();

    ContactApi.createContact(contact)

        .then((contact) => {
            serverContactList.push(contact);
            let listRow = getListRow();
            listRow[listRow.length - 1].dataset.id = contact.id;
        })
        .catch(btnSendAgain);
}

function addHtmlContact(contact) {
    let listItemHTML = contactHtml(contact);

    listContact.insertAdjacentHTML("beforeend", listItemHTML);
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
        editContact(contactItem);
    }
}

function getContactListItem(item) {
    return item.closest(CONTACT_LIST);
}

function removeContactList(item) {
    const id = getElId(item);

    ContactApi.deleteContact(id)
        .then((contact) => {
            if (contact.id) {
                item.remove();
                serverContactList.pop();
            }
        })
        .catch((e) => {
            console.log(e.message);
            btnDelAgain(item);
        });
}

function editContact(contactItem) {
    const id = getElId(contactItem);
    const contact = getContactById(id);
    let contactValue = Object.values(contact);
    contactId = id;

    for (let i = 0; i < allInputs.length; i++) {
        let inputEl = allInputs[i];
        let oneContactValue = contactValue[i];
        inputEl.value = oneContactValue;
    }

    btnSend.textContent = "Save";
}

function getContactById(id) {
    return serverContactList.find((contact) => contact.id === id);
}

function getElId(item) {
    return item.dataset.id;
}

function handleError(e) {
    console.log(e.message);
}

function getListRow() {
    return document.querySelectorAll(CONTACT_LIST);
}

function btnSendAgain() {
    let btn = btnAgain();
    let listRow = getListRow();
    listRow[listRow.length - 1].append(btn);

    btn.addEventListener("click", sendAgain);
}

function sendAgain(e) {
    let contact = getContact();

    ContactApi.createContact(contact)
        .then((contact) => {
            e.target.remove();
        })
        .catch(handleError);
}

function btnDelAgain(item) {
    let btn = btnAgain();

    item.append(btn);

    btn.addEventListener("click", delAgain);
}

function delAgain(e) {
    let contactItem = getTargetItem(e.target);

    ContactApi.deleteContact(contactItem.dataset.id).catch(handleError);
}

function getTargetItem(target) {
    return target.closest(".list__row");
}

function btnAgain() {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "Try again";

    return btn;
}
