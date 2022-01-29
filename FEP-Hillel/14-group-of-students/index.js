import Student from "./student.js";
import Group from "./group.js";
import Max from "./max.js";

const group = new Group();

group.addStudent(new Student("John", [10, 8]));
group.addStudent(new Student("Alex", [10, 9]));
group.addStudent(new Student("Bob", [6, 10]));

console.log(group.students.length === 3);
group.addStudent = {};
console.log(group.students.length === 3);

console.log(group.averageMark);

//group.students(new Student("John", [10, 10, 5, 10]));
console.log(group.students.length === 3);

Array.prototype.max = function () {
    return new Max(this).max();
};

console.log([6, 5, 8, 7, 35, 10, 24].max());
