import React, { useState, useEffect, useRef } from "react";
import TodoApi from "./TodoApi";

function useTodo() {
    const [listTodo, setListTodo] = useState([]);
    const [inputValue, setInputValue] = useState([]);
    const [todo, setTodo] = useState([]);
    const errorDiv = useRef();
    const submitBtn = useRef();

    useEffect(() => {
        TodoApi.todoList().then((todo) => {
            setListTodo(todo);
        });
    }, []);

    function onSubmit(e) {
        e.preventDefault();

        if (todo.id) {
            updateTodo();
        } else {
            createTodo();
        }
    }

    function updateTodo() {
        if (check(inputValue)) {
            updateHandler();
        } else {
            error();
        }
    }

    function updateHandler() {
        const updatedTodo = { title: inputValue };

        clearError();

        TodoApi.updateRow(todo.id, updatedTodo).then((todo) => {
            const updatedList = listTodo.map((el) => {
                if (el.id === todo.id) {
                    el.title = todo.title;
                }
                return el;
            });

            setListTodo(updatedList);
            clearInput();
            setTodo("");
            submitBtn.current.textContent = "Add";
        });
    }

    function createTodo() {
        if (check(inputValue)) {
            submitHandler(inputValue);
        } else {
            error();
        }
    }

    function inputHandler(e) {
        const inputValue = e.target.value;
        setInputValue(inputValue);
    }

    function clearInput() {
        setInputValue("");
    }

    function check(inputValue) {
        const checkValue = /^[a-z0-9A-Z]+$/i;

        return checkValue.test(inputValue);
    }

    function error() {
        errorDiv.current.textContent = "You can enter symbol or numbers only!";
    }

    function clearError() {
        errorDiv.current.textContent = "";
    }

    function submitHandler(title) {
        const todo = { title, status: false };

        clearError();

        TodoApi.createRow(todo).then((newTodo) => {
            setListTodo([...listTodo, newTodo]);
        });

        clearInput();
    }

    function deleteItem(id) {
        TodoApi.deleteTodo(id).then(() => {
            const newList = listTodo.filter((item) => item.id !== id);
            setListTodo(newList);
        });
    }

    function editItem(todo) {
        setTodo(todo);
        setInputValue(todo.title);
        submitBtn.current.textContent = "Update";
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
            setTodo("");
        });
    }

    return {
        list: { listTodo, deleteItem, editItem, changeStatus },
        submit: { onSubmit, errorDiv, submitBtn },
        input: { inputValue, setInputValue, inputHandler },
    };
}

export default useTodo;
