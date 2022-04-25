import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";
import Form from "./Form/Form";
import List from "./List";

import style from "./index.css";

function App() {
    const [list, setList] = useState([]);

    function submitHandler(value) {
        setList([...list, value]);
    }

    return (
        <div className={style.container}>
            <Form submit={submitHandler} />
            <List list={list} />
        </div>
    );
}

ReactDOM.createRoot(document.querySelector("#app")).render(<App />);
