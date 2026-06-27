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
