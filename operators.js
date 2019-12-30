let n = 5;
let s1 = '1';
let s2 = 's';
let b1 = true;
let b2 = false;
let nll = null;
let u; //undefined
let o = {}; 


console.log( `-s1 = ${-s1}` ); // -1, применили унарный минус
console.log(`n + +s1 = ${n + +s1}`); //Бинарный и унарный +

console.log(`++s1 = ${++s1}`); //Инкремент 
console.log(`--n = ${--n}`); //Декремент 
console.log(`s1++ = ${s1++}`); //Инкремент «постфиксная форма»
console.log(`s1 = ${s1}`);
console.log(`n-- = ${n--}`); //Декремент «постфиксная форма»
console.log(`n = ${n}`);



console.log(`17 % 3 = ${17 % 3}`); //Остаток от деления

console.log(`5**n = ${5**n}`); //5 в степени 3

let n1 = 2;
n1 += 5; // теперь n1=7 (работает как n1 = n1 + 5)
n1 *= 2; // теперь n1=14 (работает как n1 = n1 * 2)
n1 -= 1; // теперь n1=13 (работает как n1 = n1 - 1)
n1 /= 2; // теперь n1=6,5 (работает как n1 = n1 / 2)
console.log( n1 ); // 6,5

//Оператор "запятая"
let a, b, c;
let d = (a = 10, b = 7, c = a * b, --a);
console.log(`(a = 10, b = 7, c = a * b, --a) = ${d}`);




console.log(`2 > 1 = ${2 > 1}`);  // true (верно)
console.log(`2 < 1 = ${2 < 1}`);  // false (неверно)
console.log(`2 >= 1 = ${2 >= 1}`);  // true (верно)
console.log(`2 <= 1 = ${2 <= 1}`);  // false (неверно)
console.log(`2 == '2' = ${2 == '2'}`); // true (верно)
console.log(`2 === '2' = ${2 === '2'}`); // false (неверно)
console.log(`2 != 1 = ${2 != 1}`); // true (верно)
console.log(`'Сибель' < 'TCRM' = ${'Сибель' < 'TCRM'}`);  // false (неверно)
console.log(`null == undefined = ${null == undefined}`); // true (верно)
console.log(`null === undefined = ${null === undefined}`); // false (неверно)
console.log( undefined >= 0 ); // false (неверно)
console.log(null >= 0 ); // true (верно)
