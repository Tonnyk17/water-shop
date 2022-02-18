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
                    <li className="list-item">
                        <a href="#Venta">
                            <MenuText content={'Venta'}/>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#Renta">
                            <MenuText content={'Renta'}/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}