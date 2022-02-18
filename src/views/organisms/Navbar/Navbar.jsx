import React from "react";
import { MenuText } from "../../atoms/Text/MenuText/MenuText";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";
import './Navbar.css';

export const Navbar = () => {
    return(
        <>
            <div className="navbar">
                <h1 className="navbar-title">
                    <a href="#">
                    WaterShop
                    </a>
                </h1>
                <div className="menu-container">
                    <MenuText content={'Inicio'} redirect="#"/>
                    <MenuItem content={'Servicios'}/>
                    <MenuText content={'Contacto'} redirect="#Contact"/>
                </div>
            </div>
        </>
    )
}