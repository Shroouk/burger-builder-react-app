import React from 'react';
import './Order.css';

const Order = (props)=>{
    const ingredients = [];
    for(let ingredientName in props.ingredients){
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]})
    }
    const ingredientOutput = ingredients.map(ig =>(
        <span className="ingredientName" key={ig.name}>{ig.name}: {ig.amount}</span>
    ))
    return(
        <div className="card order-card">
            <p className="igwrapper">Ingredients: {ingredientOutput}</p>
            <p className="">Price: <strong>USD {props.price}</strong></p>
        </div>
    )
}

export default Order;