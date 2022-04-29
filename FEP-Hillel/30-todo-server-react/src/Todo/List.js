import React from "react";
import ListItem from "./ListItem";

function List({ list, deleteItem, editItem, changeStatus }) {
    return (
        <ul>
            {list.map((el) => (
                <ListItem key={el.id} todo={el} editItem={editItem} deleteItem={deleteItem} changeStatus={changeStatus} />
            ))}
        </ul>
    );
}

export default List;
