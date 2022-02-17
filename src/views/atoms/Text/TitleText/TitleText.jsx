import React from "react";
import './TitleText.css';

export const TitleText = ({content, type}) => {
    return(
        <>
            <h1 className={`title-text ${type}`}>{content}</h1>
        </>
    )
}