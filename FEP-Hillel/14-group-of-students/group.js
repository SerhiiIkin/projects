import Student from "./student.js";
class Group {
    groupStudents = [];

    addStudent(student) {
        if (this.#isStudent(student)) {
            this.groupStudents.push(student);
        }
    }

    #isStudent(student) {
        return student instanceof Student;
    }

    get students() {
        return this.groupStudents;
    }

    get averageMark() {
        let allStudentsMarks = [];

        this.groupStudents.forEach((student) => {
            allStudentsMarks.push(student.marks);
        });

        return allStudentsMarks
            .flat()
            .reduce((a, b) => a + b / allStudentsMarks.length / 2, 0)
            .toFixed(2);
    }
}

export default Group;
