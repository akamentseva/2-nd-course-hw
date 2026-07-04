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
