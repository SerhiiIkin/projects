import ContactApi from "./ContactApi";

export const ACTION_CONTACT_ADD = "ACTION_CONTACT_ADD";
export const ACTION_CONTACT_REMOVE = "ACTION_CONTACT_REMOVE";
export const ACTION_CONTACT_UPDATE = "ACTION_CONTACT_UPDATE";
export const ACTION_CONTACT_GET = "ACTION_CONTACT_GET";
export const ACTION_CONTACT_EDIT = "ACTION_CONTACT_EDIT";
export const ACTION_EDIT_CONTACT_CLEAR = "ACTION_EDIT_CONTACT_CLEAR";

export function add(contact) {
    return (dispatch) => {
        ContactApi.createContact(contact).then((newContact) => {
            dispatch({ type: ACTION_CONTACT_ADD, payload: newContact });
        });
    };
}

export function remove(id) {
    return (dispatch) => {
        ContactApi.deleteContact(id).then((contact) => {
            dispatch({ type: ACTION_CONTACT_REMOVE, payload: contact.id });
        });
    };
}

export function update(contact) {
    return (dispatch) => {
        ContactApi.updateContact(contact.id, contact).then((newContact) =>
            dispatch({
                type: ACTION_CONTACT_UPDATE,
                payload: newContact,
            })
        );
    };
}

export function edit(contact) {
    return { type: ACTION_CONTACT_EDIT, payload: contact };
}

export function getContactList() {
    return (dispatch) => {
        ContactApi.contactList().then((listContact) =>
            dispatch({ type: ACTION_CONTACT_GET, payload: listContact })
        );
    };
}

export function clearEditContact() {
    return {
        type: ACTION_EDIT_CONTACT_CLEAR,
        payload: {},
    };
}
