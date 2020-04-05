// 1. �������� ������� ����, ������� � �������
let now = new Date();
console.log(now);
console.log(`now = ${now}`);


// 2. �������� ����, ����� � ��� ������� ���� � �� ����������� ������� � �������
let day = now.getDate();
console.log(`day = ${day}`);
let month = now.getMonth();
console.log(`month = ${month + 1}`);
let year = now.getFullYear();
console.log(`year = ${year}`);

// 3. ������� ���� � ������� ��.��.��

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

console.log(`��.��.�� = ${formatDate(now)}`);