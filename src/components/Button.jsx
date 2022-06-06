import React from 'react';
import '../stylesheets/Button.css'

function Button(props){
    const isOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=');
    };

    return(
        <div 
        className = {`buttons-container ${props.children ? 'operator' : 'null'}`}>
            {props.children}
        </div>
    );
}

export default Button;