import React from "react";
import { CardImage } from "../../atoms/CardImage/CardImage";
import './Card.css';
import left from '../../../assets/left-arrow.svg'
import right from '../../../assets/right-arrow.svg'
import { CardInfo } from "../CardInfo/CardInfo";

export const Card = ({image}) => {
    return(
        <>
            <div className="card-container">
         
                <div className="card-images">
                    <img src={left} alt="Prev" className="arrow"/>
                    <CardImage image={image}/>
                    <img src={right} alt="Next" className="arrow"/>
                </div>
                <CardInfo/>
            </div>
        </>
    )
}