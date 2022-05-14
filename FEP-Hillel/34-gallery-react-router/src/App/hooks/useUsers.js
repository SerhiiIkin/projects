import { useState, useEffect } from "react";
import Api from "../services/Api";

function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [textError, setTextError] = useState("");

    useEffect(() => {
        Api.listUsers()
            .then((usersList) => {
                setLoading(false);
                setUsers(usersList);
            })
            .catch((e) => setTextError(e.message));
    }, []);

    return {
        users,
        loading,
        textError,
    };
}

export default useUsers;
