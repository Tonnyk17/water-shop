import React from "react";
import { Card } from "../../molecules/Card/Card";
import { TitleText } from '../../atoms/Text/TitleText/TitleText'
import './ServicesSection.css'

export const ServicesSection = ({type, content, product,id}) => {
    return(
        <>
           {
               product.length > 0 ?
               <div className={`services-section-container ${type}`} id={id}>
                    <TitleText content={content} type={type} />
                    <Card productData={product}/>
                </div>
                :
                null
           }
        </>
    )
}