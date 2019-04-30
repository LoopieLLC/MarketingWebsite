import React from 'react';

function handleVariant(props){
    let variant = props.variant;
    switch(variant){
        case "filled":
            return "button fill";
        case "outlined":
            return "button outline";
        case "text":
            return "button text";
        default:
            return "button text";
    }
};

function LoopieButton({text, onClick, variant, color, icon}) {

    return(
        <button className={handleVariant({variant})}>{icon}{text}</button>
    );
};

export default LoopieButton;