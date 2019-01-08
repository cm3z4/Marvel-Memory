import React from 'react';
import './style.css';

function CharacterCard(props) {
    return (
        <div className="img-thumbnail">
            <img alt={props.name} src={props.image} onClick={() => props.shuffle(props.id)} />
        </div>
    );
}

export default CharacterCard;