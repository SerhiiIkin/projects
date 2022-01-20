function Calculator(base) {
    this.base = base;

    this.add = function (num) {
        this.base += this.checkNum(num);
    };

    this.sub = function (num) {
        this.base *= this.checkNum(num);
    };

    this.set = function (enterNum) {
        this.base = this.checkNum(enterNum);
    };

    this.get = function () {
        return this.checkNum(this.base);
    };

    this.checkNum = function (num) {
        if (!(isNaN(num) || num === "")) {
            return +num;
        }

        return 0;
    };
}

const calc = new Calculator(100);

calc.add(10);
calc.add(10);
calc.sub(20);
calc.set(20);
calc.add(10);
calc.add("asd");
calc.get();
