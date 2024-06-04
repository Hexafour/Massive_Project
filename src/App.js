import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './Navigation/homeScreen';
import Praktikal from './Navigation/praktikalScreen';
import Navbar from './Component/Navbar'
import Tersimpan from './Navigation/Tersimpan';
import Login from './Navigation/login'
import Register from './Navigation/register'
import Catatan from './Navigation/catatan';

function App() {
  return (
    
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/praktikal" element={<Praktikal />} />
          <Route path="/tersimpan" element={<Tersimpan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catatan" element={<Catatan />} />
        </Routes>
      </div>
    </Router>
  );
}

const container = {
  padding: '0 2rem'
};

export default App;