import React from "react";
import './CardImage.css';

export const CardImage = ({image,name}) => {
    return(
        <>
            <img 
                src={image} 
                alt={name} 
                className='card-image'
            />
        </>
    )
}