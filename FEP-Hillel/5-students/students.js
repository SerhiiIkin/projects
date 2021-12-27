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
const id = 10;

avarageStudentMark(id);
averageGroupMark(students);

function avarageStudentMark(id) {

    let getIdMas = students.find(item => item.id === id );
    let avarage = calcArithmeticMean(getIdMas.marks);

    console.log(avarage);

    return  avarage;
}

function averageGroupMark(students) {
    let allMarks = [];

    for (let student of students) {
        allMarks.push(calcArithmeticMean(student.marks));
    }
    
    let allGroupMarks = calcArithmeticMean(allMarks);
    
    console.log(allGroupMarks);

    return allGroupMarks;
}

function calcArithmeticMean(item) {
    return item.reduce((sum, avar) => sum + avar / item.length , 0)
}
