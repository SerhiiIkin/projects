"use strick";
const allQuestions = [
    "Сколько будет 2+2?",
    "Солнце встает на востоке?",
    "Сколько будет 5 / 0?",
    "Какого цвета небо?",
    "Главный вопрос жизни, вселенной и всего такого",
];
const allData = [
    {
        question: +prompt(allQuestions[0]),
        type: Number,
    },
    {
        question: confirm(allQuestions[1]),
        type: Boolean,
    },
    {
        question: prompt(allQuestions[2]),
        type: String,
    },
    {
        question: prompt(allQuestions[3]),
        type: String,
    },
    {
        question: +prompt(allQuestions[4]),
        type: Number,
    },
];
const rightAnswers = [4, true, "0", "голубого", 42];
let sumAnswer = 0;

result();

function checkQuestions() {
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].question === rightAnswers[i]) {
            sumAnswer += 10;
        }
    }

    return sumAnswer;
}

function result() {
    let allAnswers = allData.map((item) => item.question);

    for (let i = 0; i < allAnswers.length; i++) {
        const elem = allAnswers[i];
        alert(`На вопрос "${allQuestions[i]}" Ваш ответ: ${elem}`);
    }

    alert(`Вы получили ${checkQuestions()} балов!`);
}
