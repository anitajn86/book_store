import React, { createContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import Member from './components/pages/Member/Member';
import { Admin } from './components/pages/Admin/AdminLogin';




function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes className='route'>
          <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;

