//1
const arr = [1, 5, 4, 10, 0, 3];
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
    i++;
}
//2
const arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4))
//3
const arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));
//4
const arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}
console.log(arr);
//5
const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);
//6
const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
const filterArr = arr.filter(item => item !== 'a');
console.log(filterArr);
//7
const arr = [9, 8, 7, 6, 5];
let i = Number(prompt('Угадай число'));
if (arr.includes(i)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}
//8
const text = 'abcdef';
const arr = text.split('');
arr.reverse();
const reversed = arr.join('');
console.log(reversed);
//9
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = [...arr1, ...arr2];
console.log(result);
//10
const arr = [2, 6, 7, 12, 23, 45, 67, 89, 11, 43]
for (let i = 0; i < arr.length - 1; i++) {
    const sum = arr[i] + arr[i + 1];
    console.log(`${arr[i]} + ${arr[i + 1]} = ${sum}`);
}
//11
function square(arr) {
    return arr.map(num => num * num);
}
const number = [3, 4, 5, 6]
console.log(square(number));
//12
function line(text) {
    return text.map(text => text.length)
}
const len = ['lkjhgfqw', 'hdyerq', 'poi']
console.log(line(len));
//13
function negativeNumbers(arr) {
    return arr.filter(num => num < 0);
}
const numbers = [-3, 6, 5, -2, -7];
console.log(negativeNumbers(numbers));
//14
// Создаем массив из 10 случайных чисел от 0 до 10
const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 11));
}
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log('Исходный массив:', arr);
console.log('Четные значения:', evenNumbers);
//15
const arr = [];
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
}
const sum = arr.reduce((acc, num) => acc + num, 0);
const average = sum / arr.length;
console.log('Исходный массив:', arr);
console.log('Сумма элементов:', sum);
console.log('Среднее арифметическое:', average);