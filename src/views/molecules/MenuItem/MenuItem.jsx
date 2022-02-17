import React from "react";
import { MenuText } from "../../atoms/Text/MenuText/MenuText";
import './MenuItem.css';

export const MenuItem = ({content}) => {
    return(
        <>
            <div className="menu-item-container">
                <div className="menu-item-title">
                    <MenuText content={content}/>
                </div>
                <ul className="item-list-container">
                    <li className="list-item"><MenuText content={'Venta de dispensadores'}/></li>
                    <li className="list-item"><MenuText content={'Renta de dispensadores'}/></li>
                </ul>
            </div>
        </>
    )
}