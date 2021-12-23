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

const id = createId();
const avarageStudentMark = avarageMark();
const avarageGroupMark = avarageGroup();
const result = showResult(avarageStudentMark,avarageGroupMark);

function createId() {
    let id = 10;
    return id;
}

function avarageMark() {

    let getIdMas = students.find(item => item.id == id );
    let avarage = calcSum(getIdMas.marks);

    return avarage;
}

function avarageGroup() {
    let allMarks = [];

    for (let key of students) {
        allMarks.push(calcSum(key.marks));
    }
    let allGroupMarks = calcSum(allMarks);
    
    return allGroupMarks;
}

function calcSum(item) {
    return item.reduce((sum, avar) => sum + avar / item.length , 0)
}

function showResult(avarageStudentMark,avarageGroupMark) {
    console.log(avarageStudentMark);
    console.log(avarageGroupMark);
}
