let arr1 = [];
console.log ('Перебор массива с выводом в консоль кажого элемента:');

for ( let i = 0; i <= 5; i++ ) {
    arr1.push( i );
    console.log(arr1[i]);
}
console.log (arr1); // 0,1,2,3,4,5
console.log (` ${typeof(arr1)}`);

console.log ('\n\nПеробразовать массив в строку и обртано в массив:');
// split/join – преобразует строку в массив и обратно.
// Array.isArray(arr) проверяет, является ли arr массивом.
console.log ('Перобразовать массив в строку:');
let str = arr1.join(';'); // объединить массив в строку через ;
console.log (str); // 0;1;2;3;4;5

console.log ('\nПеробразовать строку обртано в массив:');
let arr2 = str.split(';');
for (let str of arr2) {
  console.log (`Элемент массива: ${str}.`); // 0,1,2,3,4,5
}
console.log ((arr2)); // 0,1,2,3,4,5
console.log (` ${typeof(arr2)}`);


console.log ('\n\nДобавить к каждому элементу массива слова hello:');

arr2.forEach((item, index, array) =>{
    let newItem = item + ' hello';
    arr2.splice(index, 1, newItem);
})
console.log(arr2);

console.log(`\n\nПреобразовать числовой массив в boolean:`);

let arr3 = [0, 1, 2, 0, 3, 4, 5, 0];
for ( let i = 0; i < arr3.length; i++ ) {
    console.log(`${arr3[i]} = ${!!arr3[i]}`);
    arr3[i] = !!arr3[i];
}
console.log(`Массив boolean: ${arr3}`);