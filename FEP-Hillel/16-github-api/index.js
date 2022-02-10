import User from "./User.js";

const btn = document.querySelector(".btn");
const userTable = document.querySelector(".user");

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
    const inputValue = document.querySelector(".input").value;
    User.getUser(inputValue).then((user) => {
        if (user.name === null || user.name === undefined) {
            notFound(inputValue);
        } else {
            infoAbout(user);
            showAvatar(user);
            showNumbersRepositories(user);
            showFollowers(user);
            showFollowing(user);
        }
    });
}

function notFound(inputValue) {
    let htmlNotFound = `<div> User with login ${inputValue}, not found </div>`;
    userTable.insertAdjacentHTML("beforeend", htmlNotFound);
}

function infoAbout(user) {
    let htmlInfoAbout = `<div>Information about ${user.name}</div>`;
    userTable.insertAdjacentHTML("beforeend", htmlInfoAbout);
}

function showAvatar(user) {
    let HtmlShowAvatar = `<div><img src="${user.avatar_url}"></div>`;
    userTable.insertAdjacentHTML("beforeend", HtmlShowAvatar);
}

function showNumbersRepositories(user) {
    let HtmlShowNumbersRepositories = `<div>${user.name}s repositories :${user.public_repos}</div>`;
    userTable.insertAdjacentHTML("beforeend", HtmlShowNumbersRepositories);
}

function showFollowers(user) {
    let htmlShowFollowers = `<div>${user.name}s followers :${user.followers}</div>`;
    userTable.insertAdjacentHTML("beforeend", htmlShowFollowers);
}

function showFollowing(user) {
    let htmlShowFollowing = `<div>${user.name}s following :${user.following}</div>`;
    userTable.insertAdjacentHTML("beforeend", htmlShowFollowing);
}
