const listEl = document.querySelector(".list");
const inputEl = document.querySelector(".input");
const addBtn = document.querySelector(".btn");
let errorDiv = document.createElement("div");

addBtn.addEventListener("click", onClickBtn);

function onClickBtn() {
    let newLiEl = document.createElement("li");
    let value = inputEl.value;

    if (value === "") {
        errorDiv.textContent = "Enter text in input!";
        errorDiv.classList.add("red", "nyDiv");
        errorDiv.classList.remove("hide");
        inputEl.after(errorDiv);
    } else {
        newLiEl.textContent = value;
        listEl.append(newLiEl);
        value = null;
        errorDiv.classList.remove("red");
        errorDiv.classList.add("hide", "nyDiv");
    }
}
