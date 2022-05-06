import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function List({ changeStatus, editItem, deleteItem }) {
    const listTodo = useSelector((state) => state.listTodo);

    return (
        <ul>
            {listTodo.map((todo) => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    changeStatus={changeStatus}
                    editItem={editItem}
                    deleteItem={deleteItem}
                />
            ))}
        </ul>
    );
}

export default List;
