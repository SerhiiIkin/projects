import React from "react";

import style from "./ListItem.css";

function ListItem({ todo, deleteItem, changeStatus, editItem }) {
    return (
        <li>
            <span
                onClick={() => changeStatus(todo)}
                className={todo.status ? style.active : ""}>
                {todo.title}
            </span>
            <button onClick={() => deleteItem(todo.id)} className={style.btn}>
                Delete
            </button>
            <button onClick={() => editItem(todo)} className={style.btn}>
                Edit
            </button>
        </li>
    );
}

export default ListItem;
