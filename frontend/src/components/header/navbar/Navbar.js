import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
   
        <div className="navbar">
            <button><Link to='/society'>Society</Link></button>
            <button><Link to='/politic'>Politic</Link></button>
            <button><Link to='/sport'>Sport</Link></button>
        </div>
  
        )
}

export default Navbar
