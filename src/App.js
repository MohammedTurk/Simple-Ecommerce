import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './Component/NavBar';
import PhonesProducts from './Component/PhonesProducts';
import SweetsProducts from './Component/SweetsProducts';
import Cart from './Component/CartComponent/Cart';
import Details from './Component/Details';
import Modal from './Component/Modal';
import test from './Component/test';





class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/phonesproducts' component={PhonesProducts} />
          <Route path='/sweetsproducts' component={SweetsProducts} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/test' component={test} />

        </Switch>
        <Modal />

      </div>
    )
  }

}


export default App;