import React from "react";
import { TitleText } from "../../atoms/Text/TitleText/TitleText";
import './WelcomeSection.css';

export const WelcomeSection = () => {
    return(
        <>
            <div className="welcome-section-container">
                <div className="welcome-title-container">
                <TitleText content={'Bienvenidos a Watershop. La mejor opcion en dispensadores de agua'}/>
                </div>
            </div>
        </>
    )
}