import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Navigation/homeScreen";
import Praktikal from "./Navigation/praktikalScreen";
import Navbar from "./Component/Navbar";
import iconWeb from "./assets/images/iconWeb.png";
import { Button } from "react-bootstrap";
import Footer from "./Navigation/footer";
import ArtikelScreen from "./Artikel/ArtikelScreen";
import ArtikelScreen_2 from "./Artikel/ArtikelScreen_2";
import Tersimpan from "./Navigation/Tersimpan";
import Login from "./Navigation/login";
import Register from "./Navigation/register";
import PengaturanAkun from "./Pages/PengaturanAkun";
import Catatanku from "./Pages/catatanku";
import Catatan from "./Navigation/catatan";

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
          <Route path="/artikel" element={<ArtikelScreen />} />
          <Route path="/artikel_2" element={<ArtikelScreen_2 />} />
          <Route path="/pengaturan_akun" element={<PengaturanAkun />} />
          <Route path="/catatanku" element={<Catatanku />} />
          <Route path="/catatan" element={<Catatan />} />
        </Routes>
      </div>
    </Router>
  );
}

const container = {
  padding: "0 2rem",
};

export default App;
