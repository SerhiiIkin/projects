import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
    listTodo: [
        { title: "mytitle", status: true, id: 1 },
        { title: "mytitle2", status: false, id: 2 },
        { title: "mytitle3", status: false, id: 3 },
    ],
};

const store = createStore(rootReducer, initialState);

export default store;
