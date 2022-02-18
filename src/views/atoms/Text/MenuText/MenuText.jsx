import React from "react";
import './MenuText.css';

export const MenuText = ({content,redirect}) => {
    return(
        <>
            <h4 className="menu-text">
                <a href={redirect}>
                    {content}
                </a>
            </h4>
        </>
    )
}