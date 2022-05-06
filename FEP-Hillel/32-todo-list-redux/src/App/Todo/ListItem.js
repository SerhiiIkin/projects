import React, { useContext } from "react";
import { Context } from "./Todo";

import style from "./ListItem.css";

function ListItem({ todo }) {
    const { changeStatus, deleteItem, editItem } = useContext(Context);

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
