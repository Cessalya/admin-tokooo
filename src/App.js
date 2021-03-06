import React from 'react';
import {Switch, Route} from "react-router-dom";
import Login from './pages/Login';
import Product from './pages/Product';
import Customer from './pages/Customer';
import Transaction from './pages/Transaction';
import Home from './pages/Home';
import Pegawai from './pages/Admin';

export default class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/product' component={Product}/>
        <Route path='/customer' component={Customer}/>
        <Route path='/transaction' component={Transaction}/>
        <Route path='/pegawai' component={Pegawai}/>
      </Switch>
    )
  }
}