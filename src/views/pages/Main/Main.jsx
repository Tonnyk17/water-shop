import React from "react";
import { TitleText } from "../../atoms/Text/TitleText/TitleText";
import { Form } from "../../organisms/Form/Form";
import { Navbar } from "../../organisms/Navbar/Navbar";
import { ServicesSection } from "../../organisms/ServicesSection/ServicesSection";
import { WelcomeSection } from "../../organisms/WelcomeSection/WelcomeSection";

export const Main = () => {
    return(
        <>
            <Navbar/>
            <WelcomeSection/>
            <TitleText content={'Nuestros Servicios'}/>
            <ServicesSection type={'left'} content={'Venta de dispensadores'}/>
            <ServicesSection type={'right'} content={'Renta de dispensadores'}/>
            <Form/>
        </>
    )
}