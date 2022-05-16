import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./Users/Users";

function RouterPages() {
    return (
        <Routes>
            <Route path="/*" element={<Users />} />
        </Routes>
    );
}

export default RouterPages;
