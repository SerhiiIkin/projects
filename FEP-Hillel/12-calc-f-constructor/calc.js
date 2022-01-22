function Calculator(base) {
    this.base = base;

    this.add = function (num) {
        if (this.isNotNum(num)) {
            return this.base;
        }

        this.base += num;
    };

    this.sub = function (num) {
        if (this.isNotNum(num)) {
            return this.base;
        }

        this.base *= num;
    };

    this.div = function (num) {
        if (this.isNotNum(num)) {
            return this.base;
        }

        this.base /= num;
    };

    this.set = function (enterNum) {
        this.base = this.getNum(enterNum);
    };

    this.get = function () {
        return this.getNum(this.base);
    };

    this.getNum = function (num) {
        if (this.isNotNum(num)) {
            return this.base;
        }

        return +num;
    };

    this.isNotNum = function (num) {
        return num === 0 || num === "" || isNaN(num);
    };
}

const calc = new Calculator(100);

calc.add(10);
calc.add(10);
calc.sub(20);
calc.set(20);
calc.add(10);
calc.div("sdf");
calc.add("asd");
calc.set("sad");
calc.get();
