import React, { useState, useEffect } from "react";
import TodoApi from "./TodoApi";

function useTodo() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState([]);
    const errorDiv = React.useRef();

    useEffect(() => {
        TodoApi.todoList().then((todo) => {
            setList(todo);
        });
    }, []);

    function onSubmit(e) {
        e.preventDefault();


        if (check(inputValue)) {
            clearError();
            submitHandler(inputValue);
            clearInput();
        } else {
            error();
        }
    }

    function inputHandler(e) {
        setInputValue(e.target.value);
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

        TodoApi.createRow(todo).then((newTodo) => {
            setList([...list, newTodo]);
        });
    }

    function deleteItem(id) {
        TodoApi.deleteTodo(id).then(() => {
            const newList = list.filter((item) => item.id !== id);
            setList(newList);
        });
    }

    function updateTodo(id, title) {
        const newTodo = { title };
        TodoApi.updateRow(id, newTodo).then((todo) => {
            setList([...list, todo]);
        });
    }

    function editItem(todo) {
        setInputValue(todo.title);
    }

    function changeStatus(todo) {
        todo.status = !todo.status;
        TodoApi.updateRow(todo.id, todo).then((todo) => setTodo(todo));
    }

    return {
        list,
        submit: { onSubmit, errorDiv },
        deleteItem,
        updateTodo,
        editItem,
        changeStatus,
        input: { inputValue, setInputValue, inputHandler },
    };
}

export default useTodo;
