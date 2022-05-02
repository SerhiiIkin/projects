import React, { useState, useEffect } from "react";

import style from "./Form.css";

const isName_Number = /^[a-z0-9A-Z]+$/i;

function Form({ updateHandler, submitHandler, todo }) {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [nameSubmitBtn, setNameSubmitBtn] = useState("Add");

    useEffect(() => {
        if (todo.title) {
            setInputValue(todo.title);
            setNameSubmitBtn("Update");
        }
    }, [todo.title]);

    function onSubmit(e) {
        e.preventDefault();

        if (todo.id) {
            updateTodo();
        } else {
            createTodo();
        }
    }

    function updateTodo() {
        if (isValidInput(inputValue)) {
            updateHandler(inputValue);
            setInputValue("");
            setNameSubmitBtn("Add");
        }
    }

    function createTodo() {
        if (isValidInput(inputValue)) {
            submitHandler(inputValue);
            setInputValue("");
        }
    }

    function inputHandler(e) {
        const inputValue = e.target.value;

        setInputValue(inputValue);

        return isValidInput(inputValue) ? setError(false) : setError(true);
    }

    function isValidInput(inputValue) {
        return isName_Number.test(inputValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className={style.inputName}
                value={inputValue}
                onChange={inputHandler}
                type="text"
            />
            <button type="submit" name="submitBtn" className={style.btn}>
                {nameSubmitBtn}
            </button>

            {error ? (
                <div className={style.error}>
                    You can enter only symbol or number
                </div>
            ) : (
                ""
            )}
        </form>
    );
}

export default Form;
