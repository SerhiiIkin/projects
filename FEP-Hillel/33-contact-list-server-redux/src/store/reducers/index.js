import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";


const rootReducer = combineReducers({
    contact: contactsReducer,
});

export default rootReducer;
