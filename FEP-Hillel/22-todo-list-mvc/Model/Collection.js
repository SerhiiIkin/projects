import TodoApi from "../TodoApi.js";

class Collection {
    #list = [];

    fetch() {
        return TodoApi.todoList().then((list) => this.setList(list));
    }

    delete(id) {
        return TodoApi.deleteTodo(id).then(() => {
            const list = this.#list.filter((item) => item.id !== id);
            this.setList(list);
        });
    }

    submit(value) {
        let newTodo = {
            status: false,
            title: value,
        };

        return TodoApi.createRow(newTodo).then((todo) => {
            this.#list.push(todo);
        });
    }

    setList(list) {
        this.#list = list;
    }

    getList() {
        return this.#list;
    }
}

export default Collection;
