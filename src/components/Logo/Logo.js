import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import './Logo.css';

const Logo = (props)=>{
    return(
        <div className="logo" style={{height: props.height}}>
            <img src={burgerLogo} alt="My Burger" />
        </div>
    )

}

export default Logo;