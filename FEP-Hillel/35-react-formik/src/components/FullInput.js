import { ErrorMessage, Field } from "formik";
import React from "react";

function FullInput({ style, name, fieldName }) {
    return (
        <div className={style.input}>
            <label htmlFor={name}>{fieldName}</label>
            <Field name={name} type="text" />
            <ErrorMessage component="div" className={style.error} name={name} />
        </div>
    );
}

export default FullInput;
