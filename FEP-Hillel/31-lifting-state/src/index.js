import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";

function Name({ name, onNameChange }) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" value={name} onChange={onNameChange} />
        </div>
    );
}

function FavoriteAnimal({ animalName, onAnimalNameChange }) {
    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                id="animal"
                value={animalName}
                onChange={onAnimalNameChange}
            />
        </div>
    );
}

function Display({ name, animalName }) {
    return <div>{`Эй ${name}, твое любимое животное: ${animalName}!`}</div>;
}

function App() {
    const [name, setName] = useState("");
    const [animalName, setAnimalName] = useState("");

    return (
        <form>
            <Name
                name={name}
                onNameChange={(event) => setName(event.target.value)}
            />

            <FavoriteAnimal
                animalName={animalName}
                onAnimalNameChange={(event) =>
                    setAnimalName(event.target.value)
                }
            />

            <Display name={name} animalName={animalName} />
        </form>
    );
}

ReactDOM.createRoot(document.querySelector("#app")).render(<App />);
