import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckOutSummary.css'

const CheckOutSummary = (props)=> {

    return(
        <div className="container text-center m-auto">
            <h2>We hope it tastes well!</h2>
            <div className="burger-container"  >
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType='btn-danger'
                clicked={props.checkoutCancelled} > CANCEL</Button>
            <Button 
                btnType='btn-success'
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )

}
export default CheckOutSummary; 