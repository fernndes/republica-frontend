import React from 'react'

import "./styles.css"

function Button(props) {
    const { type, value, onClick } = props;
    return (
        <button type={type} className="submit-button" onClick={onClick}>{value} </button>
    )
}


export default Button;

