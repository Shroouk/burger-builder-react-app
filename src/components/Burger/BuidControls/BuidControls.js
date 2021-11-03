import React from 'react';

import BuidControl from './BuidControl/BuidControl';

const controls = [
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"},
];

const BuidControls = (props)=>{

    return(
    <div>
        <div className="row text-center justify-content-center">
            <h5>Total Price: <span className="price">{props.price.toFixed(2)}</span> $</h5>
        </div>
        {controls.map(ctrl =>{
            return <BuidControl 
                        key   = {ctrl.label} 
                        label = {ctrl.label}
                        added = { ()=> props.ingredientAdded(ctrl.type) } 
                        removed = { ()=> props.ingredientRemoved(ctrl.type) }
                        disabled={props.disabled[ctrl.type]}
                        countInfo={props.countInfo[ctrl.type]} />
            
        })}

        <div className="row text-center justify-content-center">
            <button 
            className="btn btn-secondary order-btn"
            disabled = {!props.purchaseable}
            onClick = {props.ordered}> ORDER NOW </button>
        </div>
    </div>  
    )
      

}

export default BuidControls;