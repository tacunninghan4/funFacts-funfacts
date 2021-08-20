import React from 'react'
import './index.css';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    return (
      
      <nav className="navbar navbar-dark bg-dark"> 
  <a href="/" className="navbar-brand">Navbar</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="/FunF1" >FunF 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/FunF2" >FunF 2</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/FunF3" >FunF 3</a>
    </li>
  </ul>
  <div className="collapse navbar-collapse">
  </div> 
 
</nav>

    )
}

export default withRouter (Navbar)










