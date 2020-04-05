// Есть объект a с набором свойств, объект b должен унаследовать свойства a  

let animal = {
  name: "Животное",
  eat() {
    alert(`${this.name} ест.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Кролик",
  eat() {
    this.__proto__.eat.call(this); // (*)
  }
};

rabbit.eat(); // Кролик ест.