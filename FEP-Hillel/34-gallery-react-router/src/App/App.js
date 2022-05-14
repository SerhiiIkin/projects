import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users.js";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/*" element={<Users />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
