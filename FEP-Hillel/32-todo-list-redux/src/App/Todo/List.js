import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function List() {
    const listTodo = useSelector((state) => state.listTodo);

    return (
        <ul>
            {listTodo.map((todo) => (
                <ListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default List;
