function math() {
    const mathAction = getAction();
    const firstNumber = getNumber("1");
    const secondNumber = getNumber("2");
    const result = calc(mathAction, firstNumber, secondNumber);

    showResult(mathAction, firstNumber, secondNumber, result);

    function showResult(mathAction, firstNumber, secondNumber, result) {
        console.log(`${firstNumber} ${mathAction} ${secondNumber} = ${result}`);
    }

    function getNumber(num) {
        const input = +prompt(`Writte number #${num}`);
        if (isNaN(input)) {
            console.error("You can writte only numbers!")
        }
        return input;
    }


    function calc(mathAction, firstNumber, secondNumber, result) {
        if (mathAction === "+") {
            return add(firstNumber, secondNumber);
        } else if (mathAction === "/") {
            return div(firstNumber, secondNumber);
        } else if (mathAction === "*") {
            return sub(firstNumber, secondNumber);
        } else if (mathAction === "-") {
            return mul(firstNumber, secondNumber);
        } else {
            return "You need to write right action!";
        }
    }

    function add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function mul(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    function sub(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }

    function div(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }

    function getAction() {
        return prompt("What you want to do ? (+ - / *");
    }

}


math();