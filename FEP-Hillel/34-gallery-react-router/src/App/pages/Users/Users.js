import React from "react";
import OneUser from "./OneUser";
import { Route, Routes } from "react-router-dom";
import Albums from "../Albums/Albums";
import "./UsersList.css";
import Spinner from "../../components/Spinner";
import useUsers from "../../hooks/useUsers";
import ErrorMessage from "../../components/ErrorMessage";

function Users() {
    const { users, loading, textError } = useUsers();

    if (textError) return ErrorMessage(textError);

    return (
        <div className="user__container">
            <div className="users__list">
                <h1>Users list</h1>
                <div>
                    {loading ? (
                        <Spinner />
                    ) : (
                        users.map((user) => (
                            <OneUser key={user.id} user={user} />
                        ))
                    )}
                </div>
            </div>
            <Routes>
                <Route path="/albums/*" element={<Albums />} />
            </Routes>
        </div>
    );
}

export default Users;
