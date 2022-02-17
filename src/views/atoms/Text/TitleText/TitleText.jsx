import React from "react";
import './TitleText.css';

export const TitleText = ({content}) => {
    return(
        <>
            <h1 className="title-text">{content}</h1>
        </>
    )
}