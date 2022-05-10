import {
    ACTION_CONTACT_ADD,
    ACTION_CONTACT_EDIT,
    ACTION_CONTACT_GET,
    ACTION_CONTACT_REMOVE,
    ACTION_CONTACT_UPDATE,
    ACTION_EDIT_CONTACT_CLEAR,
} from "../actions/contact";

const initialState = {
    listContact: [],
    editContact: {},
};

function contactsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_CONTACT_ADD:
            return { ...state, listContact: [...state.listContact, payload] };

        case ACTION_CONTACT_REMOVE:
            return {
                ...state,
                listContact: state.listContact.filter(
                    (item) => item.id !== payload
                ),
            };

        case ACTION_CONTACT_EDIT:
            return {
                ...state,
                editContact: payload,
            };

        case ACTION_CONTACT_UPDATE:
            return {
                ...state,
                listContact: state.listContact.map((contact) => {
                    if (contact.id === payload.id) {
                        contact.firstName = payload.firstName;
                        contact.lastName = payload.lastName;
                        contact.phone = payload.phone;
                    }
                    return contact;
                }),
            };

        case ACTION_CONTACT_GET:
            return {
                ...state,
                listContact: payload,
            };

        case ACTION_EDIT_CONTACT_CLEAR:
            return {
                ...state,
                editContact: {},
            };

        default:
            return state;
    }
}

export default contactsReducer;
