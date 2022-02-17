import React from "react";
import { TitleText } from "../../atoms/Text/TitleText/TitleText";
import { CarouselsContainer } from "../../organisms/CarouselsContainer/CarouselsContainer";
import { Navbar } from "../../organisms/Navbar/Navbar";
import { WelcomeSection } from "../../organisms/WelcomeSection/WelcomeSection";

export const Main = () => {
    return(
        <>
            <Navbar/>
            <WelcomeSection/>
            <TitleText content={'Nuestros Servicios'}/>
            <CarouselsContainer/>
        </>
    )
}