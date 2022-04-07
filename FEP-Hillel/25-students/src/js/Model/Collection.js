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
        return StudentsApi.create(newStudent).then((newStudent) =>
            this.#list.push(newStudent)
        );
    }
}
