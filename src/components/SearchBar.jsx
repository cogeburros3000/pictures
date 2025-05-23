import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Término de la búsqueda:</label>
                <input
                    type="text"
                    value={term}
                    onChange={handleChange}
                    placeholder="Escribe algo..."
                />
            </form>
        </div>
    );
}

export default SearchBar;