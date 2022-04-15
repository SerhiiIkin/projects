class TodoApi {
    static URL = "https://62054479161670001741b708.mockapi.io/api/todo/";

    static async todoList() {
        const res = await fetch(this.URL);
        const failText = "Can't get todo list";

        return this.checkRes(res, failText);
    }

    static async createRow(todo) {
        const post = this.method("POST", todo);
        const res = await fetch(this.URL, post);
        const failText = "Can't create todo";

        return this.checkRes(res, failText);
    }

    static async updateRow(id, todo) {
        const post = this.method("PUT", todo);
        const res = await fetch(this.URL + id, post);
        const failText = "Can't update todo";

        return this.checkRes(res, failText);
    }

    static async deleteTodo(id) {
        const post = {
            method: "DELETE",
        };

        const res = await fetch(this.URL + id, post);
        const failText = "Can't delete todo";

        return this.checkRes(res, failText);
    }

    static checkRes(res, failText) {
        return res.ok ? res.json() : new Error(failText);
    }

    static method(method, todo) {
        return {
            method,
            body: JSON.stringify(todo),
            headers: {
                "Content-type": "application/json",
            },
        };
    }
}

export default TodoApi;
