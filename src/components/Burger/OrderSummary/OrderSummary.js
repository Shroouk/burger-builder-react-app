import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log("os will update")
    }
    render(){
        const ingredientCummary = Object.keys(this.props.ingredients)
        .map(igkey=>{
            return(
                <li key={igkey}> <span style={{textTransform:'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]} </li>
            )
        });
         
        return(
            <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientCummary}
            </ul>
            <h6>Total Price: <strong>{this.props.totalPrice.toFixed(2)}</strong> $</h6>
            <p>Continue to checkout?</p>
    
            <Button btnType='btn-danger' clicked={this.props.modalClosed}> CANCEL</Button>
            <Button btnType='btn-success' clicked={this.props.purchasContinued}>CONTINUE</Button>
            </>
        )
    }


   
}

export default OrderSummary;