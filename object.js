// 1.Создать объект, добавить к нему свойство
let obj = {
    name : "John",
    surname : "Smith",
}
obj.age = "30";

// 2. Изменить свойство объекта
obj.age = "31";

// 3. Сделать свойство объекта функцией сложения двух чисел
addfunction = function (a, b) {
    return a + b;
}
obj.age = addfunction;