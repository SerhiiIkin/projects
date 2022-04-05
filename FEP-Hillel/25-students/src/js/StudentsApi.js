class StudentsApi {
    static URL = "https://62057f8a161670001741bbf0.mockapi.io/todo/";

    static listStudents() {
        return fetch(this.URL).then(this.checkRes);
    }

    static checkRes(res) {
        return res.ok ? res.json() : new Error(`Can't get elements from list`);
    }

    static delete(id) {
        return fetch(this.URL + id, {
            method: "DELETE",
        }).then(this.checkRes);
    }

    static update(id, student) {
        return fetch(this.URL + id, {
            method: "PUT",
            body: JSON.stringify(student),
            headers: {
                "Content-type": "application/json",
            },
        }).then(this.checkRes);
    }

    static create(student) {
        return fetch(this.URL, {
            method: "POST",
            body: JSON.stringify(student),
            headers: {
                "Content-type": "application/json",
            },
        }).then(this.checkRes);
    }
}
