import StudentsApi from "../StudentsApi";

class Collection {
    #list = [];

    fetch() {
        return StudentsApi.listStudents().then((list) => this.setList(list));
    }

    setList(list) {
        this.#list = list;
    }

    getList() {
        return this.#list;
    }

    delete(id) {
        StudentsApi.delete(id);
    }

    update(id, student) {
        StudentsApi.update(id, student);
    }

    create(newStudent) {
        this.#list.push(newStudent);

        const setId = StudentsApi.create(newStudent).then((student) => {
            newStudent.id = student.id;

            return newStudent;
        });

        return Promise.resolve({ newStudent, setId });
    }
}

export default Collection;
