import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Navigation/homeScreen";
import Praktikal from "./Navigation/praktikalScreen";
import Navbar from "./Component/Navbar";
import Footer from "./Navigation/footer";
import ArtikelScreen from "./Artikel/ArtikelScreen";
import ArtikelScreen_2 from "./Artikel/ArtikelScreen_2";
import Tersimpan from "./Navigation/Tersimpan";
import Login from "./Navigation/login";
import Register from "./Navigation/register";
import PengaturanAkun from "./Pages/PengaturanAkun";
import Catatanku from "./Pages/catatanku";
import Catatan from "./Navigation/catatan";
import Tutorial from "./Navigation/tutorial";
import Tutorial2 from "./Navigation/tutorial2";
import Tutorial3 from "./Navigation/tutorial3";
import Tutorial4 from "./Navigation/tutorial4";
import Produk from "./Navigation/produk";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font">
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
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/tutorial2" element={<Tutorial2 />} />
            <Route path="/tutorial3" element={<Tutorial3 />} />
            <Route path="/tutorial4" element={<Tutorial4 />} />
            <Route path="/produk" element={<Produk />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
