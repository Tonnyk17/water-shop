import React from "react";
import './MenuText.css';

export const MenuText = ({content}) => {
    return(
        <>
            <h4 className="menu-text">
                <a href={`#${content}`}>{content}</a>
            </h4>
        </>
    )
}