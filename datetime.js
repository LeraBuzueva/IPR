// 1. Получить текущую дату, вывести в консоль
let now = new Date();
console.log(now);
console.log(`now = ${now}`);


// 2. Получить день, месяц и год текущей даты и по отдельности вывести в консоль
let day = now.getDate();
console.log(`day = ${day}`);
let month = now.getMonth();
console.log(`month = ${month + 1}`);
let year = now.getFullYear();
console.log(`year = ${year}`);

// 3. Вывести дату в формате дд.мм.гг

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

console.log(`дд.мм.гг = ${formatDate(now)}`);