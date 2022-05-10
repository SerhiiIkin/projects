import React from "react";
import { useDispatch } from "react-redux";
import { edit, remove } from "../../store/actions/contact";

import style from "./ListItem.css";

function ListItem({ contact }) {
    const dispatch = useDispatch();
    return (
        <li>
            <span>{contact.firstName}</span>
            <span>{contact.lastName}</span>
            <span>{contact.phone}</span>
            <button
                onClick={() => dispatch(remove(contact.id))}
                className={style.btn}>
                Delete
            </button>
            <button
                onClick={() => dispatch(edit(contact))}
                className={style.btn}>
                Edit
            </button>
        </li>
    );
}

export default ListItem;
