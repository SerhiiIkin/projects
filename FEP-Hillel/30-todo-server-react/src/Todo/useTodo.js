import { useState, useEffect } from "react";
import TodoApi from "./TodoApi";

function useTodo() {
    const [listTodo, setListTodo] = useState([]);
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        TodoApi.todoList().then((todo) => {
            setListTodo(todo);
        });
    }, []);

    function updateHandler(inputValue) {
        const updatedTodo = { title: inputValue };

        TodoApi.updateRow(todo.id, updatedTodo).then((todo) => {
            const updatedList = listTodo.map((el) => {
                if (el.id === todo.id) {
                    el.title = todo.title;
                }
                return el;
            });

            setListTodo(updatedList);
        });

        setTodo("");
    }

    function submitHandler(inputValue) {
        const todo = { title: inputValue, status: false };

        TodoApi.createRow(todo).then((newTodo) => {
            setListTodo([...listTodo, newTodo]);
        });
    }

    function deleteItem(id) {
        TodoApi.deleteTodo(id).then(() => {
            const newList = listTodo.filter((item) => item.id !== id);
            setListTodo(newList);
        });
    }

    function editItem(todo) {
        setTodo(todo);
    }

    function changeStatus(todo) {
        todo.status = !todo.status;
        TodoApi.updateRow(todo.id, todo).then((todo) => {
            const updatedList = listTodo.map((el) => {
                if (el.id === todo.id) {
                    el.status = todo.status;
                }
                return el;
            });

            setListTodo(updatedList);
        });
    }

    return {
        listTodo,
        updateHandler,
        submitHandler,
        deleteItem,
        changeStatus,
        editItem,
        todo,
    };
}

export default useTodo;
