import React from "react";
import ListItem from "./ListItem";

function List({ listTodo, deleteItem, changeStatus, editItem }) {
    return (
        <ul>
            {listTodo.map((el) => (
                <ListItem
                    key={el.id}
                    todo={el}
                    changeStatus={changeStatus}
                    deleteItem={deleteItem}
                    editItem={editItem}
                />
            ))}
        </ul>
    );
}

export default List;
