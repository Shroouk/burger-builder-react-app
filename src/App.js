
import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import './App.css';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import Orders from './containers/Orders/Orders';


class App extends Component {

 

  render(){
    console.log("render");
  return (
    <BrowserRouter>
    <div className="App">

      <Layout>
        <Switch>
        <Route path='/check-out' component={CheckOut}/>
        <Route path='/orders' component={Orders}/>
        <Route exact path='/' component={BurgerBuilder}/>
        </Switch>
        
      </Layout>

    </div>
    </BrowserRouter>
    
    
  );
  }
}

export default App;
