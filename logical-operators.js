console.log ('\nЗадачи со страницы https://learn.javascript.ru/logical-operators:');
console.log ('\n1)');
console.log ('Что выведет alert (ИЛИ)?');
console.log ('Что выведет код ниже?');
console.log ('\nalert( null || 2 || undefined );');

console.log ('Ответ: 2');

console.log ('\n\n2)');
console.log ('Что выведет код ниже?');

console.log ('\nalert( alert(1) || 2 || alert(3) );');
console.log ('Ответ: 1, 2');


console.log ('\n\n3)');
console.log ('Что выведет alert (И)?');
console.log ('Что выведет код ниже?');

console.log ('\alert( 1 && null && 2 );');
console.log ('Ответ: null');


console.log ('\n\n4)');
console.log ('Что выведет код ниже?');

console.log ('\alert( null || 2 && 3 || 4 );');
console.log ('Ответ: 3');


console.log ('\n\n5)');
console.log ('Проверка значения из диапазона');
console.log ('Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. «Включительно» означает, что значение переменной age может быть равно 14 или 90.');

console.log ('Ответ: if (age >= 14 && age <= 90)');


console.log ('\n\n6)');
console.log ('Проверка значения вне диапазона');
console.log ('Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно. Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.');

console.log ('Ответ 1: if (!(age >= 14 && age <= 90))');
console.log ('Ответ 1: if (age < 14 || age > 90)');



console.log ('\n\n7)');
console.log ('Вопрос о "if"');
console.log ('Какие из перечисленных ниже alert выполнятся?');
console.log ('Какие конкретно значения будут результатами выражений в условиях if(...)?');


console.log ('if (-1 || 0) alert( "first" );');
console.log ('if (-1 && 0) alert( "second" );');
console.log ('if (null || -1 && 1) alert( "third" );');


console.log ('\nОтвет 1: first и third');
console.log ('Ответ 2.1: 1 || 0 = -1  ->  true');
console.log ('Ответ 2.2: -1 && 0 = 0  ->  false');
console.log ('Ответ 2.3:  null || -1 && 1  ->  null || 1  ->  1  ->  true');


console.log ('\n\n8)');
console.log ('Проверка логина');
console.log ('Напишите код, который будет спрашивать логин с помощью prompt.');


console.log ('Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».');

console.log ('Пароль проверять так:');

console.log ('Если введён пароль «Я главный», то выводить «Здравствуйте!»,');
console.log ('Иначе – «Неверный пароль»,');
console.log ('При отмене – «Отменено».');

console.log ('Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.');

console.log ('Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку "". Нажатие клавиши Esc во время запроса возвращает null.');

let userName = prompt("Кто это?", '');
if (userName == 'Админ') {
  let password = prompt('Пароль?', '');
  if (password == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (password == '' || password == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }
} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}