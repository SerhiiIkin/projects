import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContactList } from "../../store/actions/contact";
import Form from "./Form";
import List from "./List";

function Contact() {
    const contacts = useSelector((state) => state.contact.listContact);
    const editContact = useSelector((state) => state.contact.editContact);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContactList());
    }, []);

    return (
        <>
            <Form editContact={editContact} key={editContact.id} />
            <List contacts={contacts} />
        </>
    );
}

export default Contact;
