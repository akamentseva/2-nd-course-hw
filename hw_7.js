//1
const text = 'js';
console.log(text.toLocaleUpperCase());
//2
function filterByStart(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}
const words = ['Apple', 'application', 'banana', 'Appetite', 'cat', 'apricot'];
const result = filterByStart(words, 'app');
console.log(result);
//3
const number = 32.58884;
const numberMin = Math.floor(number);
const numberMax = Math.ceil(number);
const numberNear = Math.round(number);
console.log(`Число: ${number}\nЧисло до меньшего целого: ${numberMin}\nЧисло до наибольшего целого: ${numberMax}\nЧисло до ближайшего целого: ${numberNear}`);
//4
const number = [52, 53, 49, 77, 21, 32];
const numberMax = Math.max(...number);
const numberMin = Math.min(...number);
console.log(`Из данных чисел: ${number}\nМаксимальное число: ${numberMax}\nМинимальное число: ${numberMin}`);
//5
const arr = Math.floor(Math.random() * 10) + 1;
console.log(arr);
//6
const generateRandomArray = (num) => {
    const length = Math.floor(num / 2);
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (num + 1)));
    }
    return result;
};
console.log(generateRandomArray(10));
console.log(generateRandomArray(8));
//7
function getRandomNumber(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'Ошибка: оба аргумента должны быть целыми числами';
    }
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.ceil(Math.random() * (max - min + 1)) + min - 1;
}
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(5, 15));
//8
const now = new Date();
console.log(now);
//9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);
console.log('Текущая дата:', currentDate);
console.log('Дата через 73 дня:', futureDate);
//10
function formatDateTime(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня','июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда','четверг', 'пятница', 'суббота'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return `Дата: ${day} ${month} ${year} — это ${weekday}\nВремя: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatDateTime(now));