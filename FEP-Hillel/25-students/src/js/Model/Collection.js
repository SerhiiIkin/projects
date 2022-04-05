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
        StudentsApi.create(newStudent).then(this.updateId);
    }

    updateId(newStudent) {
        let studentEl = $("tr").last()[0];
        studentEl.dataset.id = newStudent.id;
    }
}
