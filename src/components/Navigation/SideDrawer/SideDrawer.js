import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';


const SideDrawer = (props)=>{
    let attachedClasses = ["sideDrawer","close"];
    if(props.open){
        attachedClasses = ["sideDrawer","open"];
    }
    return(
        <>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
       </> 
    )
}

export default SideDrawer;