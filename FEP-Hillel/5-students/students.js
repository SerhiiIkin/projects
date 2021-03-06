const students = [
    {
        id: 10,
        name: "John Smith",
        marks: [10, 8, 6, 9, 8, 7],
    },
    {
        id: 11,
        name: "John Doe",
        marks: [9, 8, 7, 6, 7],
    },
    {
        id: 12,
        name: "Thomas Anderson",
        marks: [6, 7, 10, 8],
    },
    {
        id: 13,
        name: "Jean-Baptiste Emanuel Zorg",
        marks: [10, 9, 8, 9],
    },
];

console.log("Средний бал группы из id:10 =" + " " + avarageStudentMark(10));
console.log("Средний бал группы из id:11 =" + " " + avarageStudentMark(11));
console.log("Средний бал группы из id:12 =" + " " + avarageStudentMark(12));
console.log("Средний бал группы из id:13 =" + " " + avarageStudentMark(13));
console.log("Общий средний бал группы =" + " " +averageGroupMark(students));

function avarageStudentMark(id) {
    let getIdMas = students.find((item) => item.id === id);

    return getIdMas ? calcArithmeticMean(getIdMas.marks) : null;
}

function averageGroupMark(students) {
    let allMarksStudentAvarage = [];

    for (let student of students) {
        allMarksStudentAvarage.push(calcArithmeticMean(student.marks));
    }

    return calcArithmeticMean(allMarksStudentAvarage);
}

function calcArithmeticMean(item) {
    return item.reduce((sum, avar) => sum + avar / item.length, 0);
}
