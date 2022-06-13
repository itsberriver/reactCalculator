import React from 'react';
import '../stylesheets/Button.css'


function Button(props){

    return(
        <div 
        className = 'buttons-container'
        onClick={()=>props.manageClick(props.children)}>
        {props.children}
        </div>
    );
}

export default Button;