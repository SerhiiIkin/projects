import React, { useState } from "react";

import style from "./Form.css";

function Form({ submit, input }) {
    return (
        <form onSubmit={submit.onSubmit}>
            <input
                className={style.inputName}
                value={input.inputValue}
                onChange={input.inputHandler}
                name="inputName"
                type="text"
            />
            <button type="submit" ref={submit.submitBtn} className={style.btn}>
                Add
            </button>
            <div className={style.error} ref={submit.errorDiv}></div>
        </form>
    );
}

export default Form;
