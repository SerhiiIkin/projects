class TodoApi {
    constructor() {
        this.responsive = this.checkResponse();
    }

    static URL = "https://62057f8a161670001741bbf0.mockapi.io/todo/";

    static todoList() {
        return fetch(this.URL).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't get todo list`);
        });
    }

    static oneTodo(id) {
        return fetch(this.URL + id).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't get todo with id : ${id}`);
        });
    }

    static createRow(todo) {
        return fetch(this.URL, {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't create todo`);
        });
    }

    static updateRow(id, todo) {
        return fetch(this.URL + id, {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't update todo`);
        });
    }

    static deleteRow(id) {
        return fetch(this.URL + id, {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(`Can't delete todo`);
        });
    }
}

export default TodoApi;
