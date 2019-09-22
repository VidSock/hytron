import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/hytron-logo.svg'
import Headroom from "react-headroom"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Navbar = class extends React.Component {
  


  render() {
    return (
	    
          
<Headroom>
    <header className="header">
    
    <Link to="/" className="logolink" title="Logo">
    <img className="logo" src={logo} alt="Hytron Manufacturing Logo" style={{ width: '150px' }} />
    </Link>
    
<input className="menu-btn" type="checkbox" id="menu-btn" />
<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

            <ul id="menu" className="menu">
               <li>
              <Link className="navbar-item" to="/products">
                Capabilities
              </Link>
              </li>
              
              <li>
              <Link className="navbar-item" to="/products">
                Industries Served
              </Link>
              </li>
              
              <li>
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
              </li>
              
              
              
              <li>
              <Link className="navbar-item" to="/contact">
                Contact Us
              </Link>
              </li>
              
              
            </ul>
            
            
      
      
   </header>
</Headroom>
        
      
      
    )
  }
}

export default Navbar
