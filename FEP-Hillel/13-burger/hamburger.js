function Hamburger(size) {
    this.prise = Object.values(size)[0];
    this.calories = Object.values(size)[1];
}

Hamburger.TOPPING_CHEESE = {
    price: 10,
    calories: 20,
};

Hamburger.TOPPING_LETTUCE = {
    price: 20,
    calories: 5,
};

Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
};

Hamburger.TOPPING_SPRINKLE_WITH_SEASONING = {
    price: 15,
    calories: 0,
};

Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5,
};

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
};

Hamburger.SIZE_AVERAGE = {
    price: 75,
    calories: 30,
};

Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40,
};

Hamburger.prototype.addTopping = function (topping) {
    this.prise += topping.price;
    this.calories += topping.calories;
};

Hamburger.prototype.getPrice = function () {
    return this.prise;
};

Hamburger.prototype.getCalories = function () {
    return this.calories;
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

hamburger.addTopping(Hamburger.TOPPING_POTATO);

hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log("Price with sauce: " + hamburger.getPrice());

console.log("Calories with sauce: " + hamburger.getCalories());
