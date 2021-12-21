function math() {
    const ACTION = {
        "+": add,
        "-": mul,
        "/": div,
        "*": sub
    };
    const ACTION_LIST = Object.keys(ACTION);
    const mathAction = getAction();
    const howMuch = getNumberLong();
    const number = getNumber(howMuch);
    const result = calc(mathAction, number);

    showResult(mathAction, number, result, howMuch);

    function getAction() {
        let input;
        do {
            input = prompt(`What you want to do ? ${ACTION_LIST.join(" ")}`);
        } while (!actionError(input));

        function actionError(input) {
            if (!ACTION_LIST.includes(input)) {
                alert("Writte correct symbol!");
            } else if (ACTION_LIST.includes(input)) {
                return true;
            }
        }
        return input;
    }

    function getNumberLong() {
        let howMuch;
        do {
            howMuch = +prompt(`How many digits, do you want to write? It is possible to enter only numbers from 1 to 5`);
        } while (!numberLongError(howMuch));

        function numberLongError(howMuch) {
            if (!(howMuch > 1 && howMuch <= 5)) {
                alert("You can writte numbers only from 2 to 5! ");
            } else {
                return true;
            }
        }
        return howMuch;
    }

    function getNumber(howMuch) {
        let inputNumbers = [];
        let i, j, element;
        for (i = 0, j = 1; i < howMuch; i++, j++) {
            do {
                inputNumbers[i] = +prompt(`Writte number #${j}`);
                element = inputNumbers[i];
            } while (!numberError(element));
        }

        function numberError(element) {
            if (isNaN(element)) {
                alert("You can write only numbers!");
            } else {
                return true;
            }
        }
        return inputNumbers;
    }

    function calc(mathAction, number) {
        if (mathAction === "+") {
            return add(number);
        } else if (mathAction === "/") {
            return div(number);
        } else if (mathAction === "*") {
            return sub(number);
        } else if (mathAction === "-") {
            return mul(number);
        } else {
            return "You need to write right action!";
        }
    }

    function add(number) {
        let result = number.reduce(function (sum, current) {
            return sum + current;
        }, 0);
        return result;
    }

    function mul(number) {
        let result = number.reduce(function (mul, current) {
            return mul - current;
        })
        return result;
    }

    function sub(number) {
        let result = number.reduce(function (sub, current) {
            return sub * current;
        })
        return result;
    }

    function div(number) {
        let result = number.reduce(function (div, current) {
            return div / current;
        })
        return result;
    }

    function showResult(mathAction, number, result, howMuch) {

        switch (howMuch) {
            case 2:
                console.log(`${number[0]} ${mathAction} ${number[1]} = ${result}`);
                break;
            case 3:
                console.log(`${number[0]} ${mathAction} ${number[1]} ${mathAction} ${number[2]} = ${result}`);
                break;
            case 4:
                console.log(`${number[0]} ${mathAction} ${number[1]} ${mathAction} ${number[2]} ${mathAction} ${number[3]} = ${result}`);
                break;
            case 5:
                console.log(`${number[0]} ${mathAction} ${number[1]} ${mathAction} ${number[2]} ${mathAction} ${number[3]} ${mathAction} ${number[4]} = ${result}`);
                break;

            default:
                console.log("You entered the wrong number of numbers");
                break;
        }

    }

}

math();