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

const id = getId();
const avarageStudentMark = avarageMark();
const avarageGroupMark = avarageGroup();

function getId() {
    let id = 10;
    return id;
}

function avarageMark() {

    let getIdMas = students.find(item => item.id == id );
    let avarage = sum(getIdMas.marks);

    return avarage;
}

console.log(avarageStudentMark);

function avarageGroup() {
    let allMarks = [];

    for (let key of students) {
        allMarks.push(sum(key.marks));
    }
    let allGroupMarks = sum(allMarks);
    
    return allGroupMarks;
}

console.log(avarageGroupMark);

function sum(item) {
    return item.reduce((sum, avar) => sum + avar / item.length , 0)
}
