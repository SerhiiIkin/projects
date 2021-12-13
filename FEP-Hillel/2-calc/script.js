function add(mathAction) {
    if (mathAction === "+") {
        console.log(`${firstNumber} ${mathAction} ${secondNumber} = ${firstNumber + secondNumber}`);
        return;
    }
}

function sub(mathAction) {
    if (mathAction === "*") {
        console.log(`${firstNumber} ${mathAction} ${secondNumber} = ${firstNumber * secondNumber}`);
        return;
    }
}

function mult(mathAction) {
    if (mathAction === "-") {
        console.log(`${firstNumber} ${mathAction} ${secondNumber} = ${firstNumber - secondNumber}`);
        return;
    }
}

function div(mathAction) {
    if (mathAction === "/") {
        console.log(`${firstNumber} ${mathAction} ${secondNumber} = ${firstNumber / secondNumber}`);
        return;
    }
}

const mathAction = prompt("What you want to do ? (+ - / *");
const firstNumber = +prompt("Writte first number:");
const secondNumber = +prompt("Writte second number:");
const resultAdd = add(mathAction, firstNumber, secondNumber);
const resultSub = sub(mathAction, firstNumber, secondNumber);
const resultMult = mult(mathAction, firstNumber, secondNumber);
const resultDiv = div(mathAction, firstNumber, secondNumber);