import React from "react";

import style from "./Form.css";

function Form({ submit }) {
    const errorDiv = React.useRef();

    function onSubmit(e) {
        e.preventDefault();

        const inputValue = e.target.inputName.value;

        if (check(inputValue)) {
            clearError();
            submit(e, inputValue);
        } else {
            error();
        }
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

    return (
        <form onSubmit={onSubmit}>
            <input className={style.inputName} name="inputName" type="text" />
            <button type="submit" className={style.btn}>
                Add
            </button>
            <div className={style.error} ref={errorDiv}></div>
        </form>
    );
}

export default Form;
