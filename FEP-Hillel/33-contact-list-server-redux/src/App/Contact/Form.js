import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, update, clearEditContact } from "../../store/actions/contact";

import style from "./Form.css";

const isNumber = /^[0-9]+$/i;
const isName = /^[a-zA-Z]+$/i;

function Form({ editContact }) {
    const [inputsSymbol, setInputsSymbol] = useState({
        name: editContact.firstName || "",
        lastName: editContact.lastName || "",
    });
    const [inputPhone, setInputPhone] = useState(editContact.phone || "");
    const [errorName, setErrorName] = useState(false);
    const [errorNumber, setErrorNumber] = useState(false);
    const dispatch = useDispatch();

    function onSubmit(e) {
        e.preventDefault();
        const contact = {
            ...editContact,
            firstName: inputsSymbol.name,
            lastName: inputsSymbol.lastName,
            phone: inputPhone,
        };

        if (contact.id) {
            updateTodo(contact);
        } else {
            createTodo(contact);
        }
    }

    function updateTodo(contact) {
        if (checkInputs()) {
            dispatch(update(contact));
            clearInputs();
        }
    }

    function createTodo(contact) {
        if (checkInputs()) {
            dispatch(add(contact));
            clearInputs();
        }
    }

    function checkInputs() {
        return (
            isValidSymbol(inputsSymbol.name) &&
            isValidSymbol(inputsSymbol.lastName) &&
            isValidNumber(inputPhone)
        );
    }

    function clearInputs() {
        setInputsSymbol({ name: [], lastName: [] });
        setInputPhone("");
        dispatch(clearEditContact());
    }

    function inputsSymbolHandler(e) {
        const inputValue = e.target.value;
        if (e.target.name === "inputName") {
            setInputsSymbol({ ...inputsSymbol, name: inputValue });
        }
        if (e.target.name === "inputLastName") {
            setInputsSymbol({ ...inputsSymbol, lastName: inputValue });
        }

        return isValidSymbol(inputValue)
            ? setErrorName(false)
            : setErrorName(true);
    }

    function isValidSymbol(inputValue) {
        return isName.test(inputValue);
    }

    function inputHandlerPhone(e) {
        const inputValue = e.target.value;

        setInputPhone(inputValue);

        return isValidNumber(inputValue)
            ? setErrorNumber(false)
            : setErrorNumber(true);
    }

    function isValidNumber(inputValue) {
        return isNumber.test(inputValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="First name"
                className={style.inputName}
                value={inputsSymbol.name}
                onChange={inputsSymbolHandler}
                type="text"
                name="inputName"
            />
            <input
                placeholder="Last name"
                className={style.inputName}
                value={inputsSymbol.lastName}
                onChange={inputsSymbolHandler}
                type="text"
                name="inputLastName"
            />
            <input
                placeholder="Phone"
                className={style.inputName}
                value={inputPhone}
                onChange={inputHandlerPhone}
                type="text"
            />
            <button type="submit" name="submitBtn" className={style.btn}>
                {Boolean(editContact.id) ? "Update" : "Add"}
            </button>

            {errorName ? (
                <div className={style.error}>You can enter only symbol</div>
            ) : (
                ""
            )}
            {errorNumber ? (
                <div className={style.error}>You can enter number</div>
            ) : (
                ""
            )}
        </form>
    );
}

export default Form;
