import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import RouterPages from "./pages/RouterPages.js";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    return (
        <>
            <button className="btn btn-success">
                <NavLink to="/">Home</NavLink>
            </button>{" "}
            <button className="btn btn-success">
                <NavLink to="userList">Show users list</NavLink>
            </button>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/userList/*" element={<RouterPages />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
