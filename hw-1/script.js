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