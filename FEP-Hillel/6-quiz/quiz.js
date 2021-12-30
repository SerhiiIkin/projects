"use strick";
const NUMBER = "number";
const BOOLEAN = "boolean";
const STRING = "string";
const RIGHT_ANSWER = 10;
const allData = [
    {
        questionText: "Сколько будет 2+2?",
        answerToQuestion: "",
        type: NUMBER,
        answer: 4,
    },
    {
        questionText: "Солнце встает на востоке?",
        answerToQuestion: "",
        type: BOOLEAN,
        answer: true,
    },
    {
        questionText: "Сколько будет 5 / 0?",
        answerToQuestion: "",
        type: STRING,
        answer: "0",
    },
    {
        questionText: "Какого цвета небо?",
        answerToQuestion: "",
        type: STRING,
        answer: "голубого",
    },
    {
        questionText: "Главный вопрос жизни, вселенной и всего такого",
        answerToQuestion: "",
        type: NUMBER,
        answer: 42,
    },
];
let sumAnswer = 0;

questions();
result(sumAnswer);

function questions() {
    for (let data of allData) {
        switch (data.type) {
            case NUMBER:
                data.answerToQuestion = +prompt(data.questionText);
                break;
            case STRING:
                data.answerToQuestion = prompt(data.questionText);
                break;
            case BOOLEAN:
                data.answerToQuestion = confirm(data.questionText);
                break;
        }

        if (data.answerToQuestion === data.answer) {
            sumAnswer += RIGHT_ANSWER;
        }
    }

    return sumAnswer;
}

function result(sumAnswer) {
    const questionText = allData.map((item) => item.questionText);
    const answers = allData.map((item) => item.answerToQuestion);

    for (let i = 0; i < questionText.length; i++) {
        const elem = questionText[i];
        const item = answers[i];
        alert(`На вопрос "${elem}" Ваш ответ: ${item}`);
    }

    alert(`Вы получили ${sumAnswer} балов!`);
}
