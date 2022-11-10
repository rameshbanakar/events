import React from 'react'
import {Link} from "react-router-dom"
function NavBar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"><i className='material-icons'>event</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar