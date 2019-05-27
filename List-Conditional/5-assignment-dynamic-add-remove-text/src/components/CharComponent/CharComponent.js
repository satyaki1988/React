import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <span className="char-inline" onClick={props.removeLetter}>{props.letter}</span>
    )
}

export default CharComponent;