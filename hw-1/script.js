// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];
function startQuizBtn() {
    let userAnswer = [];
    let correctAnswer = 0;
    for (let i = 0; i < quiz.length; i++) {
        let text = 'Вопрос ' + (i + 1) + ' из ' + quiz.length + '\n';
        text += quiz[i].question + '\n\n';
                text += 'Выбери вариант ответа:\n';
                text += quiz[i].options.join('\n');
                text += '\n\n Введи номер ответа (1, 2 или 3):';
    let answer = prompt(text);
    answer = Number(answer);
    while (answer < 1 || answer > 3 || isNaN(answer)) {
        answer = prompt('Ошибка! Введите число 1, 2 или 3:');
        answer = Number(answer);
        }
    if (answer === quiz[i].correctAnswer) { 
    correctAnswer++;
    }
}
if (correctAnswer === 0) {
    alert(`Правильных ответов: ${correctAnswer} из ${quiz.length} \nБольше старайся!`);
} else if (correctAnswer === 1){
    alert(`Правильных ответов: ${correctAnswer} из ${quiz.length} \nТы можешь лучше!`);
} else if (correctAnswer === 2){
 alert(`Правильных ответов: ${correctAnswer} из ${quiz.length} \nХорошо!`);
} else {
    alert(`Правильных ответов: ${correctAnswer} из ${quiz.length} \nМолодец! Все правильно!`);
}

}

function startArithmeticBtn() {
    const numberOne = Math.floor(Math.random() * 20) + 1;
    const numberTwo = Math.floor(Math.random() * 20) + 1;
    let example = Number(prompt('Введите тип решения задачи:\n\n 1.Сложение\n 2.Вычитание\n 3.Умножение\n 4.Деление'));
    while (isNaN(example) || example < 1 || example > 4){
        example = Number(prompt('Вы ввели неправильное число, введите от 1 до 4:\n\n 1.Сложение\n 2.Вычитание\n 3.Умножение\n 4.Деление'))
    }
    if (example === 1) {
        correctAnswer = numberOne + numberTwo;
        exampleText = `${numberOne} + ${numberTwo}`;
    } else if (example === 2) {
        correctAnswer = numberOne - numberTwo;
        exampleText = `${numberOne} - ${numberTwo}`;
    } else if (example === 3) {
        correctAnswer = numberOne * numberTwo;
        exampleText = `${numberOne} * ${numberTwo}`;
    } else if (example === 4) {
        if (numberOne > numberTwo) {
            correctAnswer = Math.floor(numberOne / numberTwo);
            exampleText = `${numberOne} ÷ ${numberTwo}`;
        } else {
            correctAnswer = Math.floor(numberTwo / numberOne);
            exampleText = `${numberTwo} ÷ ${numberOne}`;
        }
    }
     let userAnswer = Number(prompt(`Решите пример:\n\n ${exampleText} = ?`));
     if (correctAnswer === userAnswer) {
        alert('Ваш ответ правильный!');
     } else {
        alert(`Ваш ответ неправильный!\n\n Правильный ответ: \n ${exampleText} = ${correctAnswer}`);
     }
}

function startGameGuessNumberBtn() {
    const number = Math.floor(Math.random() * 100) + 1;
    let numberUser = Number(prompt('Вы начинаете игру!\n\n Введите ваше число:'));
    while (numberUser != number) {
        if (isNaN(numberUser) || numberUser < 1 || numberUser > 100){
            numberUser = Number(prompt('Вы ввели неправильное число.\n\n Введите число от 1 до 100.'))
            continue;
        } 
        if (number > numberUser){
            numberUser = Number(prompt(`Загаданное число больше.\n\n Введите следующее:`));
        } else if (number < numberUser) {
            numberUser = Number(prompt(`Загаданное число меньше.\n\n Введите следующее:`));
        }
    } 
    alert('Вы угадали!');
    
}

function startInvertedTextBtn() {
    const text = String(prompt('Введите текст который вы хотите перевернуть!'));
    if (!isNaN(text) && text.trim() !== ''){
        text = prompt('Вы ввели число!\n\n Введите слово:');
    }
    if (text.trim() === '') {
        alert('Вы ничего не ввели!');
        return;
    }
    const textReversed = text.split('').reverse().join('');
    alert(`Перевернутый текст:\n\n ${textReversed}`);
}