import React from "react";
import Form from "./Form";
import List from "./List";
import useTodo from "./useTodo";

import style from "./Todo.css";

function Todo() {
    const { list, submit, input } = useTodo();

    return (
        <div className={style.container}>
            <Form submit={submit} input={input} />
            <List list={list} />
        </div>
    );
}

export default Todo;
