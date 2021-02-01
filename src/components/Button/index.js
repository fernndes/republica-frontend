import React from 'react'

import "./styles.css"

function Button(props) {
    const { type, value, onClick, className } = props;
    return (
        <button type={type} className={`submit-button ${className}`} onClick={onClick}>{value} </button>
    )
}


export default Button;

