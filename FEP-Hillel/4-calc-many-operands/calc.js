function math() {
    const ACTION = {
        "+": allAction,
        "-": allAction,
        "/": allAction,
        "*": allAction
    };
    const ACTION_SHOW = {
        2: showConsole,
        3: showConsole,
        4: showConsole,
        5: showConsole
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
        return ACTION[mathAction](number);
    }

    function allAction(number) {
        let result = number.reduce(function (action, current) {
            switch (mathAction) {
                case "+":
                    return action + current;
                case "-":
                    return action - current;
                case "*":
                    return action * current;
                case "/":
                    return action / current;
            }
        });

        return result;
    }

    function showResult(mathAction, number, result, howMuch) {
        return ACTION_SHOW[howMuch](number);
    }

    function showConsole(number) {
        console.log(`${number.join(" " + mathAction + " ")} = ${result}`);
    }

}

math();