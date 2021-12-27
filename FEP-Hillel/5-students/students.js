const students = [
    {
        id: 10,
        name: "John Smith",
        marks: [ 10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: "John Doe",
        marks: [ 9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: "Thomas Anderson",
        marks: [6, 7, 10, 8 ]
    },
    {
        id: 13,
        name: "Jean-Baptiste Emanuel Zorg",
        marks: [10, 9, 8, 9 ]
    }
]

console.log(avarageStudentMark(10)); 
console.log(averageGroupMark(students));


function avarageStudentMark(id) {

    let getIdMas = students.find(item => item.id === id);

    return getIdMas ? calcArithmeticMean(getIdMas.marks) : null;
}

function averageGroupMark(students) {
    let allMarks = [];

    for (let student of students) {
        allMarks.push(calcArithmeticMean(student.marks));
    }
    return calcArithmeticMean(allMarks);
}

function calcArithmeticMean(item) {
    return item.reduce((sum, avar) => sum + avar / item.length, 0)
}
