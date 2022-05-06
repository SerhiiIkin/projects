export const ACTION_TODO_ADD = "ACTION_TODO_ADD";
export const ACTION_TODO_REMOVE = "ACTION_TODO_REMOVE";
export const ACTION_TODO_STATUS = "ACTION_TODO_STATUS";
export const ACTION_TODO_UPDATE = "ACTION_TODO_UPDATE";

export function add(todo) {
    return { type: ACTION_TODO_ADD, payload: todo };
}

export function remove(id) {
    return { type: ACTION_TODO_REMOVE, payload: id };
}

export function updateStatus(todo) {
    return { type: ACTION_TODO_STATUS, payload: todo };
}

export function update(todo) {
    return { type: ACTION_TODO_UPDATE, payload: todo };
}
