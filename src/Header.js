import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    
    return (
        <div>
            <h1>BloomTech Eats</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pizza" id="order-pizza">Order</NavLink>
            </nav>
        </div>
    )

}