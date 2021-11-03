import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import WithErrorHandler from '../../components/HOC/WithErrorHandler/WithErrorHandler';

class Orders extends Component {
    state= {
        orders: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/orders.json')
             .then( res =>{
                 const fetchedOrders = [];
                 for(let key in res.data){
                     fetchedOrders.push({
                         ...res.data[key],
                         id:key
                    })
                 }
                 console.log(fetchedOrders)
                 this.setState({loading:false, orders:fetchedOrders})
             })
             .catch(err =>{
                this.setState({loading:false})
             })
    }
    render() { 
        return ( 
            <div className="container mt-5">
                <h4 className="text-center mt-5"> All Orders </h4>
                <div>
                    {this.state.orders.map(order => (
                        <Order key={order.id} 
                               ingredients={order.ingredients}
                               price={order.price}/>
                    ))}
                </div>
                
            </div>
         );
    }
}
 
export default WithErrorHandler(Orders,axios);