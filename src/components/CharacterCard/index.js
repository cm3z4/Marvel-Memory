import React from 'react';
import './style.css';

function CharacterCard(props) {
    return (
        <div className="img-thumbnail">
            <img alt={props.name} src={props.image} />
        </div>
    );
}

export default CharacterCard;