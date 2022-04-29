import React, { useEffect } from "react";
import Form from "./Form";
import List from "./List";
import useTodo from "./useTodo";

import style from "./Todo.css";

function Todo() {
    const {
        list,
        submit,
        deleteItem,
        updateTodo,
        editItem,
        todo,
        changeStatus,
        input,
    } = useTodo();

    return (
        <div className={style.container}>
            <Form
                submit={submit}
                todo={todo}
                input={input}
                updateTodo={updateTodo}
            />
            <List
                list={list}
                deleteItem={deleteItem}
                changeStatus={changeStatus}
                editItem={editItem}
            />
        </div>
    );
}

export default Todo;
