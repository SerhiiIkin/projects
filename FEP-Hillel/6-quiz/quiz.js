"use strick";
const allData = [
    {
        questionText: "Сколько будет 2+2?",
        answerToQuestion: "",
        type: "number",
        answer: 4,
    },
    {
        questionText: "Солнце встает на востоке?",
        answerToQuestion: "",
        type: "boolean",
        answer: true,
    },
    {
        questionText: "Сколько будет 5 / 0?",
        answerToQuestion: "",
        type: "string",
        answer: "0",
    },
    {
        questionText: "Какого цвета небо?",
        answerToQuestion: "",
        type: "string",
        answer: "голубого",
    },
    {
        questionText: "Главный вопрос жизни, вселенной и всего такого",
        answerToQuestion: "",
        type: "number",
        answer: 42,
    },
];
let sumAnswer = 0;

askQuestions();
alert(`Вы получили ${checkQuestions()} балов!`);

function askQuestions() {
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].type === "number") {
            allData[i].answerToQuestion = +prompt(allData[i].questionText);
        } else if (allData[i].type === "string") {
            allData[i].answerToQuestion = prompt(allData[i].questionText);
        } else if (allData[i].type === "boolean") {
            allData[i].answerToQuestion = confirm(allData[i].questionText);
        }
    }
}

function checkQuestions() {
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].answerToQuestion === allData[i].answer) {
            sumAnswer += 10;
        }
    }

    return sumAnswer;
}
