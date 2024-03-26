import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Member from '../pages/Member/Member';
import { Home } from '../pages/Home/Home';
import { Admin } from '../pages/Admin/AdminLogin';

const Navbar = () => {
  return (
    <div className="app_Navbar">
      <div className='Navbar_link'>
        <Link to="/">Home</Link>
        <Link to="/member">Member</Link>
        <Link to="/admin">Admin</Link>
      </div>
      <div className="navbar-components">
        <Home />
        <Member />
        <Admin />
      </div>
    </div>
  );
};

export default Navbar;
