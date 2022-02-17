import React from "react";
import './CardInfo.css';

export const CardInfo = ({data}) => {
    return(
        <>
            <div className="card-info-container">
                <h5 className="card-info-text">Nombre:</h5>
                <h5 className="card-info-text">Marca: </h5>
                <h5 className="card-info-text">Modelo: </h5>
            </div>
        </>
    )
}