import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Correct import statements

import { Member } from '../containers/Member';
import { Home } from '../containers/Home';
import { Admin } from '../containers/Admin';

const Navbar = () => {
  return (
    <div className="app_Navbar">
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/member">Member</Link>
          <Link to="/admin">Admin</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navbar;
