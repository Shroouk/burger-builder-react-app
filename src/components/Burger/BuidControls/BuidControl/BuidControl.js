import React from 'react';

import '../BuidControls.css';

const BuidControl = (props)=>{

    return(
        <>
        <div className="row mb-3 px-5">
           
                <span className="ctrl-label">{props.label} </span>
            
            
            <button className="btn btn-warning less" onClick={props.removed} disabled={props.disabled}>-</button>
            <span> {props.countInfo} </span>
            <button className="btn btn-warning more" onClick={props.added}>+</button>
            
            
        </div>
        
        </>
    )

}

export default BuidControl;