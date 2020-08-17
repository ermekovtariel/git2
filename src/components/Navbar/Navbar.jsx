import React from 'react';
import z from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={z.Navbar}>
      <div>
        <NavLink className={z.item} activeClassName={z.activeLink} to='/Profile' >Profile</NavLink>
      </div>
      <div>
        <NavLink className={`${z.item} ${z.active}`} to='/Dialogs' activeClassName={z.activeLink}>Massages</NavLink>
      </div>
      <div>
        <NavLink className={z.item} to='/News' activeClassName={z.activeLink}>News</NavLink>
      </div>
      <div>
        <NavLink className={z.item} to='/Music' activeClassName={z.activeLink}>Music</NavLink>
      </div>
      <div>
        <NavLink className={z.item} to='/Settings' activeClassName={z.activeLink}>Sattings</NavLink>
      </div>
     
    </nav>
  );
};




export default Navbar;


