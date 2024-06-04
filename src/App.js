import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Navigation/homeScreen";
import Praktikal from "./Navigation/praktikalScreen";
import iconWeb from "./assets/images/iconWeb.png";
import { Button } from "react-bootstrap";
import Footer from "./Navigation/footer";
import ArtikelScreen from "./Artikel/ArtikelScreen";
import ArtikelScreen_2 from "./Artikel/ArtikelScreen_2";
import PengaturanAkun from "./Pages/PengaturanAkun";

function App() {
  return (
    <Router>
      <div style={container}>
        <div className="container">
          <nav style={navStyle}>
            <div style={leftSideStyle}>
              <Link to="/">
                <img src={iconWeb} alt="Logo" style={logoStyle} />
              </Link>
            </div>
            <div style={rightSideStyle}>
              <NavLink to="/" style={linkStyle}>
                Beranda
              </NavLink>
              <NavLink to="/praktikal" style={linkStyle}>
                Praktikal
              </NavLink>
              <NavLink to="/tips" style={linkStyle}>
                Price
              </NavLink>
              <Button type="button" className="btn btn-primary btn-md ">
                Login
              </Button>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/praktikal" element={<Praktikal />} />
          <Route path="/artikel" element={<ArtikelScreen />} />
          <Route path="/artikel_2" element={<ArtikelScreen_2 />} />
          <Route path="/pengaturan_akun" element={<PengaturanAkun />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

const container = {
  padding: "0 2rem",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  background: "rgba(255, 255, 255, 0.5)",
  color: "#fff",
};

const leftSideStyle = {
  flex: "1",
};

const rightSideStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  fontSize: "1.5rem",
};

const iconStyle = {
  fontSize: "1.2rem",
  margin: "0 0.5rem",
};

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "black",
};

// aktif page
function NavLink({ to, style, children }) {
  const location = useLocation();

  return (
    <Link
      to={to}
      style={to === location.pathname ? { ...style, color: "#00000" } : style}
    >
      {children}
    </Link>
  );
}

export default App;
