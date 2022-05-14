import React from "react";

function ErrorMessage(textError) {
    if (textError) {
        return <h2 style={{ color: "red" }}>{textError}</h2>;
    }
}

export default ErrorMessage;
