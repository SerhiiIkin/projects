import React from "react";

function List({ list }) {
    return (
        <ul>
            {list.map((el, index) => (
                <li key={index}>{el}</li>
            ))}
        </ul>
    );
}

export default List;
