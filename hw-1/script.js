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
    const example = Math.floor(Math.random() * 4) + 1;
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
     let userInput = prompt(`Решите пример:\n\n ${exampleText} = ?`);
     if (userInput === null) {
        alert('Игра прервана. Вы нажали "Отмена".');
        return;
    }
    if (userInput === '') {
        alert('Вы ничего не ввели. Игра прервана.');
        return;
    }
    if (isNaN(userInput)){
        userInput = prompt(`Вы ввели не число.\n\n Введите ответ:\n\n ${exampleText} = ?`);
        if (userInput === '') {
        alert('Вы ничего не ввели. Игра прервана.');
        return; }
        if (userInput === null) {
        alert('Игра прервана. Вы нажали "Отмена".');
        return;
         }
    }
    let userAnswer = Number(userInput);
    if (isNaN(userAnswer)) {
        alert(`Вы ввели не число. Игра прервана.`);
        return;
    }
     if (correctAnswer === userAnswer) {
        alert('Ваш ответ правильный!');
     } else {
        alert(`Ваш ответ неправильный!\n\n Правильный ответ: \n ${exampleText} = ${correctAnswer}`);
     }
    }
    
    

function startGameGuessNumberBtn() {
    const number = Math.floor(Math.random() * 100) + 1;
    let userInput = prompt('Вы начинаете игру!\n\n Введите ваше число:');
    if (userInput === null) {
        alert('Игра прервана. Вы нажали "Отмена".');
            return;
    }
    if (userInput === '') {
            alert('Вы ничего не ввели. Игра прервана.');
            return;
    }
    if (isNaN(userInput)) {
        userInput = prompt('Вы ввели слово.\n\n Введите число от 1 до 100.');
        if (userInput === null){
            alert('Игра прервана. Вы нажали "Отмена".');
            return;
        }
        if (userInput === '') {
            alert('Вы ничего не ввели. Игра прервана.');
            return;
        }
    }
    
    let numberUser = Number(userInput);
    while (numberUser != number) {
        if (numberUser === null){
            alert('Игра прервана. Вы нажали "Отмена".');
            return;
        }
        if (numberUser < 1 || numberUser > 100){
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
    let userInput = prompt('Введите текст который вы хотите перевернуть!');
    if (userInput === null) {
        alert('Игра прервана. Вы нажали "Отмена".');
        return;
    }
    if (userInput.trim() === '') {
        alert('Вы ничего не ввели! Игра прервана.');
        return;
    }
    if (!isNaN(userInput) && userInput.trim() !== ''){
        let newInput = prompt('Вы ввели число!\n\n Введите слово или текст:');
        if (newInput === null) {
            alert('Игра прервана. Вы нажали "Отмена".');
            return;
    }
    if (newInput.trim() === '') {
        alert('Вы ничего не ввели!');
        return;
    }
     if (!isNaN(newInput.trim())) {
            alert('Вы опять ввели число! Игра прервана.');
            return;
    }
    userInput = newInput;
}
    const textReversed = userInput.split('').reverse().join('');
    alert(`Перевернутый текст:\n\n ${textReversed}`);
}


function startRockScissorsPaperBtn() {
    const gameOptions = ['камень', 'ножницы', 'бумага'];
    let usersChoice = prompt('Игра началась!\n\nВыберете:\n1. камень\n2. ножницы\n3. бумага');
    if (usersChoice === null) {
        alert('Игра прервана. Вы нажали "Отмена".');
        return;
    }
    if (usersChoice.trim() === '') {
        alert('Вы ничего не ввели! Игра прервана.');
        return;
    }
    if (!isNaN(usersChoice) && usersChoice.trim() !== ''){
        let newUsersChoice = prompt('Вы ввели число!\n\n Введите слово или текст:');
        if (newUsersChoice === null) {
            alert('Игра прервана. Вы нажали "Отмена".');
            return;
            }
    
    if (newUsersChoice.trim() === '') {
        alert('Вы ничего не ввели!');
        return;
    }
     if (!isNaN(newUsersChoice.trim())) {
            alert('Вы опять ввели число! Игра прервана.');
            return;
    } 
    usersChoice = newUsersChoice;
}
    
    usersChoice = usersChoice.trim().toLowerCase();

    if (!gameOptions.includes(usersChoice)) {
        alert('Вы ввели неправильное слово!\n\nВведите: камень, ножницы, бумага');
        return;
    }
    const randomIndex = Math.floor(Math.random() * gameOptions.length);
    const computerChoice = gameOptions[randomIndex];
    let result;
    if (usersChoice === computerChoice) {
        result = 'Ничья!';
    } else if (
        (usersChoice === 'камень' && computerChoice === 'ножницы') ||
        (usersChoice === 'ножницы' && computerChoice === 'бумага') ||
        (usersChoice === 'бумага' && computerChoice === 'камень')
    ) {
        result = 'Вы победили!';
    } else {
        result = 'Вы проиграли!';
    }
    alert(`Результат игры:\n\nВаш выбор: ${usersChoice}\nВыбор компьютера: ${computerChoice}\n\n${result}`);
}