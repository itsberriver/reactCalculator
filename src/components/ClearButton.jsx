import React from 'react';
import '../stylesheets/ClearButton.css'

function ClearButton ( props ) {
    return(
        <button 
        className = 'clear-button'
        onClick = { props.manageClear } >
            { props.children }
        </button>
    );
}

export default ClearButton;
