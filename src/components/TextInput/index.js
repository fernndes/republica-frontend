import React from 'react'

import './styles.css'

export default function TextInput(props) {
    const { label, id, onChange, style, required, type, onBlur} = props;
    return (
            <input
                type={type}
                onChange={onChange}
                id={id}
                autoComplete="off"
                placeholder={label}
                label={label}                
                style={style}
                required={required ? true : false}      
                {...props}
                />
    )
}
