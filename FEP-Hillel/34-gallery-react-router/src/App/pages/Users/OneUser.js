import React from "react";
import { Link } from "react-router-dom";

import "./OneUser.css";

function OneUser({ user }) {
    return (
        <div className="user">
            <span>{user.name} </span>
            <button className="btn btn-warning">
                <Link
                    to={{ pathname: "/albums", search: `?userId=${user.id}` }}>
                    Album
                </Link>
            </button>
        </div>
    );
}

export default OneUser;
