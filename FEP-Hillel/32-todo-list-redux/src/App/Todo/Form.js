import React, { useState, useEffect } from "react";

import style from "./Form.css";

const isName_Number = /^[a-z0-9A-Z]+$/i;

function Form({ updateHandler, submitHandler, todo }) {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (todo.title) {
            setInputValue(todo.title);
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
                {Boolean(todo.title) ? "Update" : "Add"}
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
