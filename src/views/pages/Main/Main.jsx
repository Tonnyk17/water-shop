import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/productsDuck";
import { TitleText } from "../../atoms/Text/TitleText/TitleText";
import { Form } from "../../organisms/Form/Form";
import { Navbar } from "../../organisms/Navbar/Navbar";
import { ServicesSection } from "../../organisms/ServicesSection/ServicesSection";
import { WelcomeSection } from "../../organisms/WelcomeSection/WelcomeSection";

export const Main = () => {
    const dispatch = useDispatch()
    const selector = useSelector(store => store)

    useEffect(() => {
        dispatch(getProducts())
    },[])
    return(
        <>
            <Navbar/>
            <WelcomeSection/>
            <TitleText content={'Nuestros Servicios'}/>
            <ServicesSection 
                type={'left'} 
                content={'Venta de dispensadores'}
                product={selector.products.Venta}
                id='Venta'
            />
                
            <ServicesSection 
                type={'right'} 
                content={'Renta de dispensadores'}
                product={selector.products.Renta}
                id='Renta'
            />
            <Form/>
        </>
    )
}