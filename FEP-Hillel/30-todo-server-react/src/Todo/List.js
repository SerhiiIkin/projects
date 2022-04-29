import React from "react";
import ListItem from "./ListItem";

function List({ list }) {
    return (
        <ul>
            {list.listTodo.map((el) => (
                <ListItem key={el.id} todo={el} list={list} />
            ))}
        </ul>
    );
}

export default List;
