function math() {
    const mathAction = prompt("What you want to do ? (+ - / *");
    const firstNumber = +prompt("Writte first number:");
    const secondNumber = +prompt("Writte second number:");
    result(mathAction, firstNumber, secondNumber);
}

const result = function (mathAction, firstNumber, secondNumber) {
    if (isNaN(firstNumber)) {
        console.error("Wrong enter first number!");
        return;
    }
    if (isNaN(secondNumber)) {
        console.error("Wrong enter second number!");
        return;
    }
    if (mathAction === "+") {
        console.log(`${firstNumber} ${mathAction} ${secondNumber} = ${firstNumber + secondNumber}`);
        return;
    } else if (mathAction === "/") {
        console.log(`${firstNumber} ${mathAction} ${secondNumber} = ${firstNumber / secondNumber}`);
        return;
    } else if (mathAction === "*") {
        console.log(`${firstNumber} ${mathAction} ${secondNumber} = ${firstNumber * secondNumber}`);
        return;
    } else if (mathAction === "-") {
        console.log(`${firstNumber} ${mathAction} ${secondNumber} = ${firstNumber - secondNumber}`);
        return;
    } else {
        console.error("You need to write right action!");
    }
    return;
}
math();