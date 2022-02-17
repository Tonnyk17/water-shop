import React, { useState } from "react";
import { CardImage } from "../../atoms/CardImage/CardImage";
import './Card.css';
import left from '../../../assets/left-arrow.svg'
import right from '../../../assets/right-arrow.svg'
import { CardInfo } from "../CardInfo/CardInfo";

export const Card = ({productData}) => {
    const [itemPosition, setItemPosition] = useState(0);

    const handleNext = () => {
        const position = itemPosition + 1;
        if (position >= productData.length){
            setItemPosition(0)
        }
        else{
            setItemPosition(position)
        }
        
    }
    const handlePrev = () => {
        const position = itemPosition - 1;
        if(position < 0){
            setItemPosition(productData.length - 1)
        }
        else{
            setItemPosition(position)
        }
        
    }
    return(
        <>
            <div className="card-container">
         
                <div className="card-images">
                    <img 
                        src={left} 
                        alt="Prev" 
                        className="arrow" onClick={handlePrev}
                    />
                    <CardImage image={productData[itemPosition].Imagen}/>
                    <img 
                        src={right} 
                        alt="Next" 
                        className="arrow" 
                        onClick={handleNext}
                    />
                </div>
                <CardInfo data={productData[itemPosition]}/>
            </div>
        </>
    )
}