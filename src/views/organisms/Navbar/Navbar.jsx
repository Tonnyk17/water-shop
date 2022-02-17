import React from "react";
import { MenuText } from "../../atoms/Text/MenuText/MenuText";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";
import './Navbar.css';

export const Navbar = () => {
    return(
        <>
            <div className="navbar">
                <h1 className="navbar-title">WaterShop</h1>
                <div className="menu-container">
                    <MenuText content={'Inicio'}/>
                    <MenuItem content={'Servicios'}/>
                    <MenuText content={'Contacto'}/>
                </div>
            </div>
        </>
    )
}