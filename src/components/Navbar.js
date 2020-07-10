import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <navbar>  
     <ul>
       <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
       <li><NavLink activeClassName='active' to='/contact'>Contact</NavLink></li>
     </ul>
    </navbar>
  )
}

export default Navbar;
