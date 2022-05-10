import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import Titles from "./Titles";
import style from "./List.css";

function List() {
    const listContact = useSelector((state) => state.contact.listContact);

    return (
        <ul className={style.list}>
            <Titles />
            {listContact.map((contact) => (
                <ListItem key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}

export default List;
