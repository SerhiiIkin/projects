import User from "./User.js";

const btn = document.querySelector(".btn");
const userTable = document.querySelector(".user");
const htmlContent = document.querySelector("#content").innerHTML;

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
    const inputValue = document.querySelector(".input").value;
    User.getUser(inputValue).then((user) => {
        if (user.name === null || user.name === undefined) {
            notFound(inputValue);
        } else {
            showInfo(user);
        }
    });
}

function notFound(inputValue) {
    let htmlNotFound = `<div> User with login ${inputValue}, not found </div>`;
    userTable.insertAdjacentHTML("beforeend", htmlNotFound);
}

function showInfo(user) {
    let htmlInfoAbout = htmlContent;
    htmlInfoAbout = htmlInfoAbout
        .replace("{{user.avatar_url}}", user.avatar_url)
        .replace("{{public_repos}}", user.public_repos)
        .replace("{{followers}}", user.followers)
        .replace("{{following}}", user.following)
        .replace(`{{name}}`, user.name)
        .replace(`{{name}}`, user.name)
        .replace(`{{name}}`, user.name)
        .replace(`{{name}}`, user.name);

    userTable.insertAdjacentHTML("beforeend", htmlInfoAbout);
}
