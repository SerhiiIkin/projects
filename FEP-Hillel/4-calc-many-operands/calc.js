function math() {
    const ACTION = {
        "+": add,
        "-": mul,
        "/": div,
        "*": sub
    };
    const MIN_NUMBER_COUNT = 1;
    const MAX_NUMBER_COUNT = 5;
    const ACTION_LIST = Object.keys(ACTION);

    const mathAction = getAction();
    const count = getLengthNumber();
    const number = getNumbers(count);
    const result = calc(mathAction, number);

    showResult(mathAction, number, result);

    function getAction() {
        let input;

        do {
            input = prompt(`What you want to do ? ${ACTION_LIST.join(" ")}`);
        } while (!actionError(input));

        return input;
    }

    function actionError(input) {
        if (!ACTION_LIST.includes(input)) {
            alert("Writte correct symbol!");
        } else if (ACTION_LIST.includes(input)) {
            return true;
        }
    }

    function getLengthNumber() {
        let count;

        do {
            count = prompt(`How many digits, do you want to write? It is possible to enter only numbers from 2 to 5`);
        } while (!checkLengthNumber(count));

        return +count;
    }

    function checkLengthNumber(count) {
        if (!(count > MIN_NUMBER_COUNT && count <= MAX_NUMBER_COUNT)) {
            alert("You can writte numbers only from 2 to 5! ");
        } else {
            return true;
        }
    }

    function getNumbers(count) {
        let inputNumbers = [];
        let i, j, element;

        for (i = 0, j = 1; i < count; i++, j++) {
            do {

                inputNumbers[i] = prompt(`Writte number #${j}`);
                element = inputNumbers[i];

            } while (!numbersError(element));
        }

        return inputNumbers.map(Number);
    }

    function numbersError(element) {
        if (isNaN(element) || !element || element === " ") {
            alert("You can write only numbers!");
        } else {
            return true;
        }
    }

    function calc(mathAction, number) {
        const mathFunc = ACTION[mathAction]
        return number.reduce((acc, current) => mathFunc(acc, current));
    }

    function add(acc, current) {
        return acc + current;
    }
    function sub(acc, current) {
        return acc * current;
    }
    function mul(acc, current) {
        return acc - current;
    }
    function div(acc, current) {
        return acc / current;
    }

    function showResult(mathAction, number, result) {
        console.log( `${number.join(" " + mathAction + " ")} = ${result}` );
    }

}

math();