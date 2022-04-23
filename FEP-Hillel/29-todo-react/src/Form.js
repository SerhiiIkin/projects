import React, { useState } from "react";

function Form({ onsubmit, style }) {
    const [value, setValue] = useState("");

    return (
        <form onSubmit={onsubmit}>
            <input className={style.inputName} name="inputName" type="text" />
            <button type="submit" className={style.btn}>
                Add
            </button>
        </form>
    );
}

export default Form;
