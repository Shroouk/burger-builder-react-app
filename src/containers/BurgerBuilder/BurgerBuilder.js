import React, { Component } from 'react';

import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import BuidControls from '../../components/Burger/BuidControls/BuidControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import WithErrorHandler from '../../components/HOC/WithErrorHandler/WithErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.5,
    meat : 2,
    bacon : 1
}

class BurgerBuilder extends Component {
    /* constructor(prps){
        super(props);
        this.state={...}
    } */
    state = { 
        ingredients:null,
        totalPrice:5,
        purchaseable:false,
        purchasing:false,
        loading:false,
        error:false
     }

     componentDidMount(){
         axios.get('https://react-my-burger-shrouk-default-rtdb.firebaseio.com/ingredients.json')
         .then(response => {
             this.setState({ingredients:response.data})
         }).catch(error=>{
             this.setState({error:true})
         })
     }

    updatePurchaseableState (ingredients) {
        const sum = Object.keys(ingredients).map(igkey =>{
            return ingredients[igkey];                               // return array with the values (numbers)
        }).reduce((sum,elm)=>{
            return sum + elm;
        }, 0);
        this.setState({purchaseable: sum > 0});
        
     };

     

     addIngredientHandler = (type)=>{
         const oldCount = this.state.ingredients[type];
         const updatedCount = oldCount + 1;
         const updatedIngredients = {...this.state.ingredients};
         updatedIngredients[type] = updatedCount;
         
         const priceAddition = INGREDIENT_PRICES[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice + priceAddition;
         this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

         this.updatePurchaseableState(updatedIngredients);
        
     }
     removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

        this.updatePurchaseableState(updatedIngredients);
    }

    purchasHandler = ()=>{
        this.setState({ purchasing:true})
    }

    purchasCancelHandler = ()=>{
        this.setState({ purchasing:false})
    }

    purchasContinueHandler = ()=>{
       // alert('You Continue');
       

       const queryParams = [];
       for(let i in this.state.ingredients){
           queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
       }

       queryParams.push('price=' + this.state.totalPrice)

       const queryString = queryParams.join('&');

       this.props.history.push({
           pathname: '/check-out',
           search:'?' + queryString,
           
       })
    }

    render() { 
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 
           
        }
        const countInfo = {...this.state.ingredients};


        let orderSummary = <OrderSummary ingredients={this.state.ingredients}
                                         totalPrice={this.state.totalPrice}
                                         purchasContinued={this.purchasContinueHandler }  
                                         modalClosed={this.purchasCancelHandler}/>
        if(this.state.loading || !this.state.ingredients){
            orderSummary = <Spinner/>
        }    
        
       
        let burger = this.state.error ? <p className="mt-5 mx-auto text-danger">Ingredients can't be loaded</p> : <Spinner/>
        
        if(this.state.ingredients){
            burger  =  <>
                            <div className="col-md-6 my-auto text-center">
                            <BuidControls 
                                                    ingredientAdded = {this.addIngredientHandler}
                                                    ingredientRemoved = {this.removeIngredientHandler} 
                                                    disabled = {disabledInfo}
                                                    countInfo = {countInfo} 
                                                    purchaseable={this.state.purchaseable}
                                                    price={this.state.totalPrice}
                                                    ordered ={this.purchasHandler}/>
                            </div>
                            <div className="col-md-6  order-first order-md-last">
                            <Burger ingredients={this.state.ingredients}/>
                            </div>
                            </>
            
            
            
        }
       
        return ( 
            <>
            <div className="container">
                <Modal show={this.state.purchasing} modalClosed={this.purchasCancelHandler}>
                    {orderSummary}
                </Modal>
                <div className='row '>
                    
                    {burger}
                   
                </div>
            </div>
            </>
         );
    }
}
 
export default WithErrorHandler(BurgerBuilder,axios);