import React from "react";

import style from "./ListItem.css";

function ListItem({ todo, list }) {
    return (
        <li>
            <span
                onClick={() => list.changeStatus(todo)}
                className={todo.status ? style.active : ""}>
                {todo.title}
            </span>
            <button
                onClick={() => list.deleteItem(todo.id)}
                className={style.btn}>
                Delete
            </button>
            <button onClick={() => list.editItem(todo)} className={style.btn}>
                Edit
            </button>
        </li>
    );
}

export default ListItem;
