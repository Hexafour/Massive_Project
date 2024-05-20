import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './Navigation/homeScreen';
import Praktikal from './Navigation/praktikalScreen';
import Navbar from './Component/Navbar'
import Tersimpan from './Navigation/Tersimpan';

function App() {
  return (
    
    <Router>
      <div>
        <div style={container}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/praktikal" element={<Praktikal />} />
          <Route path="/tersimpan" element={<Tersimpan />} />
        </Routes>
      </div>
    </Router>
  );
}

const container = {
  padding: '0 2rem'
};

export default App;