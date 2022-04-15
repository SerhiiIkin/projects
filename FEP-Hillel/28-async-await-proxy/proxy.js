let user = {
    name: "John",
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop) {
            return target[prop]
                ? target[prop]
                : `Ошибка: такого свойства ${prop} не существует`;
        },
    });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует
