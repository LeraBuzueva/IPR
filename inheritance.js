// ���� ������ a � ������� �������, ������ b ������ ������������ �������� a  

let animal = {
  name: "��������",
  eat() {
    alert(`${this.name} ���.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "������",
  eat() {
    this.__proto__.eat.call(this); // (*)
  }
};

rabbit.eat(); // ������ ���.