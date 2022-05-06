import {
    ACTION_TODO_ADD,
    ACTION_TODO_REMOVE,
    ACTION_TODO_STATUS,
    ACTION_TODO_UPDATE,
} from "../actions/todo";

function rootReducer(state, { type, payload }) {
    switch (type) {
        case ACTION_TODO_REMOVE:
            return {
                ...state,
                listTodo: state.listTodo.filter((item) => item.id !== payload),
            };

        case ACTION_TODO_ADD:
            return { ...state, listTodo: [...state.listTodo, payload] };

        case ACTION_TODO_STATUS:
            return {
                ...state,
                listTodo: state.listTodo.map((el) => {
                    if (el.id === payload.id) {
                        el.status = !el.status;
                    }
                    return el;
                }),
            };
        case ACTION_TODO_UPDATE:
            return {
                ...state,
                listTodo: state.listTodo.map((el) => {
                    if (el.id === payload.id) {
                        el.title = payload.title;
                    }
                    return el;
                }),
            };

        default:
            return state;
    }
}

export default rootReducer;
