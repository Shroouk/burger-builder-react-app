import React, { Component } from "react";
import { Route } from 'react-router-dom';

import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from './ContactData/ContactData';

class CheckOut extends Component{

    state= {
        ingredients:null,
        totalPrice:0
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            //['salad','1']
            if(param[0] === 'price'){
                price = param[1]
            }else{
                ingredients[param[0]] = +param[1];
            }
            
        }
        this.setState({ingredients:ingredients, totalPrice:price})
    }

    checkoutCancelled = ()=>{
        this.props.history.goBack();
    }

    checkoutContinued = ()=>{
        this.props.history.replace('/check-out/contact-data')
    }
    render(){
        return(
            <div>
                <CheckOutSummary 
                    ingredients={this.state.ingredients}
                    checkoutContinued={this.checkoutContinued}
                    checkoutCancelled={this.checkoutCancelled}/>
                <Route path={this.props.match.path + '/contact-data'}
                       render={ (props)=> ( <ContactData 
                                            {...props}
                                            ingredients={this.state.ingredients}
                                            price={this.state.totalPrice} /> )}/>    
            </div>
        )
    }
}

export default CheckOut;