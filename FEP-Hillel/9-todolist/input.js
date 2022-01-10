const myList = document.querySelector(".list");
const inputText = document.querySelector(".input");
const addBtn = document.querySelector(".btn");
let errorDiv = document.createElement("div");

addBtn.addEventListener("click", onClickBtn);

function onClickBtn() {
    let nyLi = document.createElement("li");
    let value = inputText.value;

    if (value !== "") {
        nyLi.textContent = value;
        myList.append(nyLi);
        value = null;
        errorDiv.classList.remove("red");
        errorDiv.classList.add("hide", "nyDiv");
    } else {
        errorDiv.innerHTML = "Enter text in input!";
        errorDiv.classList.add("red", "nyDiv");
        errorDiv.classList.remove("hide");
        inputText.after(errorDiv);
    }
}
