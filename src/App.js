import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
class App extends Component {
  render() {
    return <div className='App'>
      <Header/>
      <Switch>
      <Route  exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={Shop}></Route>
      </Switch>
    </div>;
  }
}

export default App;

// if we use exact then only the exact component is matched and rendered as we use exact in homepage component then homepage is rendered only if path is /
//if we use switch then no need for exact switch will render only that component whose full path is exactly mactched it gives us more control

