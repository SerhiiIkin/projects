import User from "./User.js";

const btn = document.querySelector(".btn");
const userTable = document.querySelector(".user");

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
    const inputValue = document.querySelector(".input").value;
    User.getUser(inputValue)
        .then((user) => {
            if (user.name === null || user.name === undefined) {
                notFound(user);
            } else {
                infoAbout(user);
                showAvatar(user);
                showNumbersRepositories(user);
                showFollowers(user);
                showFollowing(user);
            }
        })
        .catch((e) => console.log(e));
}

function notFound(user) {
    let div = createDiv();
    div.textContent = `User with login ${user.login}, not found`;
    userTable.insertAdjacentElement("beforeend", div);
}

function infoAbout(user) {
    let div = createDiv();
    div.textContent = `Information about ${user.name}`;
    userTable.insertAdjacentElement("beforeend", div);
}

function showAvatar(user) {
    let img = document.createElement("img");
    img.src = user.avatar_url;
    userTable.insertAdjacentElement("beforeend", img);
}

function showNumbersRepositories(user) {
    let div = createDiv();
    div.textContent = `${user.name}s repositories :${user.public_repos}`;
    userTable.insertAdjacentElement("beforeend", div);
}

function showFollowers(user) {
    let div = createDiv();
    div.textContent = `${user.name}s followers :${user.followers}`;
    userTable.insertAdjacentElement("beforeend", div);
}

function showFollowing(user) {
    let div = createDiv();
    div.textContent = `${user.name}s following :${user.following}`;
    userTable.insertAdjacentElement("beforeend", div);
}

function createDiv() {
    return document.createElement("div");
}
