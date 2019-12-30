let n1 = 1, n2 = 9;
if (n1 === n2) {
  console.log(`n1 === n2 = ${n1}` );
} else if (n1 > n2) {
  console.log(`n1 > n2 = ${n2}` );
} else {
  console.log(`else = ${n1 + n2}` );
};



let s1 = prompt('Первая буква', '');
let s2 = prompt('Вторая буква', '');
let strings;
if (s1 === s2) {
    console.log(`s1 = ${s1}`);
} else if (s1 > s2) {
    console.log(`s2 = ${s2}`);
} else {
    console.log(`s1 + s2 = ${s1 + s2}`);
}

let strings1 = (s1 === s2) ? true : false;
console.log(strings1);

let strings2 = s1 === s2;
console.log(strings2);


let b1 = true, b2 = false;
if (b1 === b2) {
  console.log(`b1 === b2 = ${b1}` );
} else if (b1 > b2) {
  console.log(`b1 > b2 = ${b2}` );
} else {
  console.log(`else = ${b1 + b2}` );
};

let age = prompt('Возраст?', 18);
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';
console.log( message );


switch(s2) {
    case 'a': 
        console.log('a');
        break;
    case 'z':
        console.log('z');
        break;
    default:
        console.log("value does not exist");
}