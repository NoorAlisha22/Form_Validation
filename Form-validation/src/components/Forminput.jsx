import React, { useState } from 'react';
import './formInput.css';

function Forminput(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    const handleInvalid = (e) => {
        e.target.setCustomValidity('🤯Enter the valid input😵');
    };

    const handleInput = (e) => {
        e.target.setCustomValidity(''); 
    };

    return (  
        <div className='formInput'>
            <label>{label}</label>
            <input 
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
                onInvalid={handleInvalid} 
                onInput={handleInput} 
            />
            <span>{errorMessage}</span>     
        </div>
    );
}

export default Forminput;