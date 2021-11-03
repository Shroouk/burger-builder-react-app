import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems = (props)=>(
    <ul className="navigationItems">
        <NavigationItem link="/" >Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/check-out">Check Out</NavigationItem>
    </ul>
)
   

export default NavigationItems;