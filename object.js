// 1.������� ������, �������� � ���� ��������
let obj = {
    name : "John",
    surname : "Smith",
}
obj.age = "30";

// 2. �������� �������� �������
obj.age = "31";

// 3. ������� �������� ������� �������� �������� ���� �����
addfunction = function (a, b) {
    return a + b;
}
obj.age = addfunction;