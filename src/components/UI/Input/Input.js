import React from 'react';

import './Input.css'

const Input = (props)=> {
    let inputElement = null;
    const inputClasses = ['form-control'];
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('invalid-input')
    }
    switch(props.elementType){
        case('input'):
        inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
        break;
        case('textarea'):
        inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
        break;
        case('select'):
        inputElement = (<select className={inputClasses.join(' ')}   
                                value={props.value}
                                onChange={props.changed}>
                                    {props.elementConfig.options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.displayValue}
                                        </option>
                                    ))}
                                    
                                </select>);
        break;
        default:
        inputElement = <input className="form-control" {...props.elementConfig} value={props.value}/>;    
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className="validationError">Please enter a valid value!</p>;
    }

    return(
        <div className=" input-element">
        <label htmlFor={props.forName} className="form-label">{props.label}</label>
        {inputElement}
        {validationError}
        </div>
    )
}

export default Input;