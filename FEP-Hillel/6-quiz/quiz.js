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
const mark = questions();

result(mark);

function questions() {
    let sumAnswer = 0;

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
    for (let { questionText, answerToQuestion } of allData) {
        alert(`На вопрос "${questionText}" Ваш ответ: ${answerToQuestion}`);
    }

    alert(`Вы получили ${sumAnswer} балов!`);
}
