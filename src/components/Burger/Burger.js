import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props)=>{

    
    //Object.keys(props.ingredients) >> returns array of strings of the object keys  (props.ingredients here is an object not an array so can't map on it)
    let transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
 
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey + i } type={igKey} />
        })
    }).reduce((arr,elm)=>{
        return arr.concat(elm)
    },[]) ;

    if(transformedIngredient.length === 0){
        transformedIngredient = <p className="text-center">Please Start adding ingredients</p>
    }

    return(
        <div className="Burger-wrapper mt-5">
            
            <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )

}

export default Burger;