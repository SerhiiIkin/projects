function createCalculator(num) {
    function checkNum(Num) {
        if (!(isNaN(Num) || Num === "")) {
            return +Num;
        }

        return 0;
    }

    return {
        set: (enterNum) => (num = checkNum(enterNum)),
        get: () => num,
        sub: (Num) => (num *= checkNum(Num)),
        add: (Num) => (num += checkNum(Num)),
    };
}

const calculator = createCalculator(10);

calculator.sub(2);
calculator.add("asd");
calculator.add(2);
calculator.set(2);
calculator.add(6);

console.log(calculator.get());
