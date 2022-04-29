import React from "react";
import * as ReactDOM from "react-dom/client";
import Todo from "./Todo/Todo";

function App() {
    return <Todo />;
}

ReactDOM.createRoot(document.querySelector("#app")).render(<App />);
