import React from "react";
import { Card } from "../../molecules/Card/Card";
import { TitleText } from '../../atoms/Text/TitleText/TitleText'
import './ServicesSection.css'
import { useSelector } from "react-redux";

export const ServicesSection = ({type, content, product}) => {
    console.log(product,'jjj')
    return(
        <>
           {
               product.length > 0 ?
               <div className={`services-section-container ${type}`}>
                    <TitleText content={content} type={type}/>
                    <Card productData={product}/>
                </div>
                :
                null
           }
        </>
    )
}