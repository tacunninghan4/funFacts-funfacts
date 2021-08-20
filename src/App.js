import React, { Component } from 'react'
import FunF1 from './FunF1'
import FunF2 from './FunF2'
import FunF3 from './FunF3'
import'./index.css'
import './Rainbow'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from "./Navbar"
import'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
         <Navbar /> 
      <Switch>
     
      <Route exact path='/' component={Home}/>
      <Route path='/FunF1' component={FunF1}/>
      <Route path='/FunF2' component={FunF2}/>
     <Route path='/FunF3' component={FunF3}/>
     </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
// <div className="App">
     //   <h1>Fun Facts About Weather</h1>
       //   <p>Are You Ready for the storm</p>
       // <FunF1/>
       // <FunF2/>
       // <FunF3/>
       
     //  </div>

