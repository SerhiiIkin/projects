import React from "react";
import Form from "./Form";
import List from "./List";
import useTodo from "./useTodo";

import style from "./Todo.css";

export const Context = React.createContext();

function Todo() {
    const {
        updateHandler,
        submitHandler,
        deleteItem,
        changeStatus,
        editItem,
        todo,
    } = useTodo();

    return (
        <Context.Provider
            value={{
                updateHandler,
                submitHandler,
                deleteItem,
                changeStatus,
                editItem,
                todo,
            }}>
            <div className={style.container}>
                <Form />
                <List />
            </div>
        </Context.Provider>
    );
}

export default Todo;
