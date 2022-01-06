function createCalculator(num) {
    let result = num;

    function checkNum(Num) {
        if (!(isNaN(Num) || Num === "")) {
            return +Num;
        }

        return 0;
    }

    return {
        set: (enterNum) => (result = checkNum(enterNum)),
        get: () => result,
        sub: (Num) => (result *= checkNum(Num)),
        add: (Num) => (result += checkNum(Num)),
    };
}

const calculator = createCalculator(10);

calculator.sub(2);
calculator.add("asd");
calculator.add(2);
calculator.set(2);
calculator.add(2);

console.log(calculator.get());
