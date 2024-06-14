import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";
import iconWeb from "../assets/images/iconWeb.png";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="container sticky-top" style={navStyle}>
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
        <NavLink to="/produk" style={linkStyle}>
          Produk
        </NavLink>
        {user ? (
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {user.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <NavLink to="/login" style={linkStyle}>
            <Button type="button" className="btn btn-primary btn-md">
              Login
            </Button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

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

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "black",
};

function NavLink({ to, style, children }) {
  const location = useLocation();

  return (
    <Link
      to={to}
      style={
        to === location.pathname
          ? { ...style, color: "#3E8CFF", textDecoration: "underline" }
          : style
      }
    >
      {children}
    </Link>
  );
}

export default Navbar;
