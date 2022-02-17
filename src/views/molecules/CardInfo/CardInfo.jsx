import React from "react";
import './CardInfo.css';

export const CardInfo = ({data}) => {
    return(
        <>
            <div className="card-info-container">
                <h5 className="card-info-text">Nombre: {data.Nombre}</h5>
                <h5 className="card-info-text">Marca: {data.Marca}</h5>
                <h5 className="card-info-text">Modelo: {data.Modelo}</h5>
            </div>
        </>
    )
}