import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import './ToolBar.css';

const ToolBar = (props)=>{
    return(
        <header className="toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo height="80%"/>
        <nav className="desktopOnly">
            <NavigationItems/>
        </nav>
        </header> 
    )
     
}

export default ToolBar;