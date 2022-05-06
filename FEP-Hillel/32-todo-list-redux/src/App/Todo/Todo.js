import React from "react";
import Form from "./Form";
import List from "./List";
import useTodo from "./useTodo";

import style from "./Todo.css";

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
        <div className={style.container}>
            <Form
                updateHandler={updateHandler}
                submitHandler={submitHandler}
                todo={todo}
            />
            <List
                changeStatus={changeStatus}
                editItem={editItem}
                deleteItem={deleteItem}
            />
        </div>
    );
}

export default Todo;
