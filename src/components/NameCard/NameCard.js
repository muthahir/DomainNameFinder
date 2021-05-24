import React from 'react';
import './NameCard.css';
const NameCard = ({ suggestedName }) => {
    const namecheapUrl =
        'https://www.namecheap.com/domains/registration/results/?domain=';
    return (
        <a className="card-link" href={`${namecheapUrl}${suggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};
export default NameCard;
