import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";
import Form from "./Form";
import List from "./List";

import style from "./index.css";

function App() {
    const [list, setList] = useState([]);

    function submitHandler(e) {
        e.preventDefault();

        setList([...list, e.target.inputName.value]);

        clearInput(e);
    }

    function clearInput(e) {
        e.target.inputName.value = "";
    }

    return (
        <div className="container">
            <Form style={style} onsubmit={submitHandler} />
            <List list={list} />
        </div>
    );
}

ReactDOM.createRoot(document.querySelector("#app")).render(<App />);
