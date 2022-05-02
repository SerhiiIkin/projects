import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import useTodo from "./useTodo";

import style from "./Todo.css";

function Todo() {
    const {
        listTodo,
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
                listTodo={listTodo}
                deleteItem={deleteItem}
                changeStatus={changeStatus}
                editItem={editItem}
            />
        </div>
    );
}

export default Todo;
