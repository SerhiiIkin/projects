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
    const MIN_NUMBER_COUNT = 1;
    const MAX_NUMBER_COUNT = 5;
    const ACTION_LIST = Object.keys(ACTION);

    const mathAction = getAction();
    const count = getNumberLong();
    const number = getNumber(count);
    const result = calc(mathAction, number);

    showResult(mathAction, number, result, count);

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
        let count;

        do {
            count = prompt(`How many digits, do you want to write? It is possible to enter only numbers from 2 to 5`);
        } while (!numberLongError(count));

        function numberLongError(count) {
            if (!(count > MIN_NUMBER_COUNT && count <= MAX_NUMBER_COUNT)) {
                alert("You can writte numbers only from 2 to 5! ");
            } else {
                return true;
            }
        }

        return +count;
    }

    function getNumber(count) {
        let inputNumbers = [];
        let i, j, element;

        for (i = 0, j = 1; i < count; i++, j++) {
            do {

                inputNumbers[i] = prompt(`Writte number #${j}`);
                element = inputNumbers[i];
            } while (!numberError(element));
        }

        function numberError(element) {
            if (isNaN(element) || !element || element === " ") {
                alert("You can write only numbers!");
            } else {
                return true;
            }
        }

        return inputNumbers.map(Number);
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

    function showResult(mathAction, number, result, count) {
        return ACTION_SHOW[count](number);
    }

    function showConsole(number) {
        console.log(`${number.join(" " + mathAction + " ")} = ${result}`);
    }

}

math();