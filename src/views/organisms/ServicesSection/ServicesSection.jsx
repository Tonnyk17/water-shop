import React from "react";
import { Card } from "../../molecules/Card/Card";
import { TitleText } from '../../atoms/Text/TitleText/TitleText'
import './ServicesSection.css'

export const ServicesSection = ({type, content}) => {
    return(
        <>
            <div className={`services-section-container ${type}`}>
                <TitleText content={content} type={type}/>
                <Card image={'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/k/-/k-wd5k-2.jpg'}/>
            </div>
        </>
    )
}