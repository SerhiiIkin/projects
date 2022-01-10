const myList = document.querySelector(".list");
const myInput = document.querySelector(".input");
const btn = document.querySelector(".btn");
let nyDiv = document.createElement("div");

btn.addEventListener("click", onClickBtn);

function onClickBtn() {
    let nyLi = document.createElement("li");
    let value = myInput.value;

    if (value !== "") {
        nyLi.textContent = value;
        myList.append(nyLi);
        value = null;
        nyDiv.classList.remove("red");
        nyDiv.classList.add("hide", "nyDiv");
    } else {
        nyDiv.innerHTML = "Enter text in input!";
        nyDiv.classList.add("red", "nyDiv");
        nyDiv.classList.remove("hide");
        myInput.after(nyDiv);
    }
}
