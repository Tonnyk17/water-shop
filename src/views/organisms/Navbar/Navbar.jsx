import React from "react";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";
import './Navbar.css';

export const Navbar = () => {
    return(
        <>
            <div className="navbar">
                <h1 className="navbar-title">WaterShop</h1>
                <div className="menu-container">
                    <MenuItem/>
                    <MenuItem/>
                </div>
            </div>
        </>
    )
}