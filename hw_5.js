//1
function getMin(a, b) {
    return a < b ? a : b;
}
console.log(getMin(6,9));
//2
function evenOrUneven(a) {
    if (a % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
    
}
evenOrUneven(11);
//3
function printSquare(num) {
    console.log(num * num);
}
printSquare(7);

//4
function checkAge(age) {
    age = Number(age);
    if (age < 0) {
        return 'Вы ввели неправильное значение';
    } else if (age >= 0 && age <= 12) {
        return 'Привет, друг!';
    } else if (age >= 13) {
        return 'Добро пожаловать!';
    } else {
        return 'Вы ввели неправильное значение';
    }
}
alert(checkAge(prompt("Сколько вам лет?")));
//5
function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
    a = Number(a);
    b = Number(b);
    return a * b;
}
//6
function cubeNumber() {
    const input = prompt('Введите число:');
    if (isNaN(input) || input === null || input === '') {
        return 'Переданный параметр не является числом';
    }
    const num = Number(input);
    const cubed = num * num * num;
    return `${num} в кубе равняется ${cubed}`;
}
console.log(cubeNumber());
//7
const circle1 = {
    radius: 5,
    
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};
const circle2 = {
    radius: 10,
    
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};