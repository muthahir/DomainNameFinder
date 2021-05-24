import React from 'react';
import './SearchBox.css';
const SearchBox = ({ handlerInput }) => {
    return (
        <div className="search-container">
            <input
                placeholder="Type KeyWords.."
                className="search-input"
                onChange={(e) => handlerInput(e.target.value)}
            />
        </div>
    );
};
export default SearchBox;
