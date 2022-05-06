import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, remove, updateStatus, update } from "../../store/actions/todo";

function useTodo() {
    const [todo, setTodo] = useState([]);
    const dispatch = useDispatch();

    function updateHandler(inputValue) {
        const updatedTodo = { ...todo, title: inputValue };

        dispatch(update(updatedTodo));

        setTodo("");
    }

    function submitHandler(inputValue) {
        const todo = { title: inputValue, status: false, id: Math.random() };

        dispatch(add(todo));
    }

    function deleteItem(id) {
        dispatch(remove(id));
    }

    function editItem(todo) {
        setTodo(todo);
    }

    function changeStatus(todo) {
        dispatch(updateStatus(todo));
    }

    return {
        updateHandler,
        submitHandler,
        deleteItem,
        changeStatus,
        editItem,
        todo,
    };
}

export default useTodo;
