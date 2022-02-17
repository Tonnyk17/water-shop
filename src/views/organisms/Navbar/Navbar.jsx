import React from "react";
import { TitleText } from "../../atoms/Text/TitleText/TitleText";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";
import './Navbar.css';

export const Navbar = () => {
    return(
        <>
            <div className="navbar">
                <TitleText content={'WaterShop'}/>
                <div className="menu-container">
                    <MenuItem/>
                    <MenuItem/>
                </div>
            </div>
        </>
    )
}