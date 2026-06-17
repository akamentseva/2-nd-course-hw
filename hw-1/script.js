//1
let a = 10;
alert(a);
a=20;
alert(a);
//2
let firstIphone = 2007;
alert(firstIphone);
//3
let creatorJS = 'Брендан Эйх';
alert(creatorJS);
//4
let a = 10;
let b = 2;
sum = a + b;
difference = a - b;
product = a * b;
quotient  = a / b;
alert(`Сумма чисел: ${sum}`, `Разность чисел : ${difference}`,`Произведение чисел: ${product}`, `Частное чисел: ${quotient}`);
//5
let result = 2 ** 5;
alert(result);
//6
let a = 9;
let b = 2;
result = a % b;
alert(result);
//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
//8
let age = Number(prompt('Сколько вам лет?'));
alert(age);
//9
let user = {
  name: "Алексей",
  age: 28,
  isAdmin: true
};
//10
let name = prompt("Введите ваше имя:");
alert(`Привет, ${name}!`);



//условное ветвление
//1
let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
//2
let c = 2;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
//3
let d = 101;
let e = 65;
if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
//4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
//5
let monthNumber = 12;
  switch (monthNumber) {
      case 12:
      case 1:
      case 2:
          console.log('Зима');
          break;
      case 3:
      case 4:
      case 5:
          console.log('Весна');
          break;
      case 6:
      case 7:
      case 8:
          console.log('Лето');
          break;
      case 9:
      case 10:
      case 11:
          console.log('Осень');
          break;
      default:
          console.log('Некорректный номер месяца');
  }



//циклы
//1
let hello = 'Привет';
let i = 0;
while(i < 2){
  i++;
  console.log(hello);
}
//2
let i = 0;
while(i < 5){
  i++;
  console.log(i);
}
//3
let i = 6;
while(i < 22){
  i++;
  console.log(i);
}
//4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let key in obj) {
    console.log(key + ' — зарплата ' + obj[key] + ' долларов');
}
//5
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
}
console.log('Результат деления:', n);
console.log('Количество итераций:', num);
//6
let firstFriday = 2;
const daysInMonth = 31;
let fridayCount = 0;
for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    fridayCount++;
}
console.log(`Количество отчетных пятниц в этом месяце: ${fridayCount}`);
