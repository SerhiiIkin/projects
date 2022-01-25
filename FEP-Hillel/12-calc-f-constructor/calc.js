function Calculator(base) {
    this.base = base;

    this.add = function (num) {
        if (this.isNotNum(num)) {
            this.base += num;
        }
    };

    this.sub = function (num) {
        if (this.isNotNum(num)) {
            this.base *= num;
        }
    };

    this.div = function (num) {
        if (this.isNotNum(num)) {
            this.base /= num;
        }
    };

    this.set = function (enterNum) {
        this.base = this.getNum(enterNum);
    };

    this.get = function () {
        return this.base;
    };

    this.getNum = function (num) {
        return this.isNotNum(num) ? +num : this.base;
    };

    this.isNotNum = function (num) {
        return !(num === 0 || num === "" || isNaN(num));
    };
}

const calc = new Calculator(100);

calc.add(10);
calc.add(10);
calc.sub(20);
calc.div(10);
calc.set(20);
calc.add(10);
calc.div("sdf");
calc.add("asd");
calc.set("sad");
console.log(calc.get());
