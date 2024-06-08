import React from "react";
import brand from "../assets/images/brandTextWhite.png";
import { Image } from "react-bootstrap";
import { ImPhone } from "react-icons/im";
import Logo from "../assets/images/iconWeb.png";

const Footer = () => (
  <footer
    className="d-flex justify-content-between p-5 mt-5 text-light"
    style={{ backgroundColor: "#253751" }}
  >
    <div className="d-flex gap-3 align-items-center">
      <img src={Logo} width={"90px"} />
      <span>|</span>
      <span className="fs-4">Your Lifestyle Guidance</span>
    </div>
    <div>
      <p style={{ textAlign: "right" }}>
        Lyfe 2024 Copyright Reserved. <br />
        Free Healthy Lifestyle guidance for everyone{" "}
      </p>

      <div className="d-flex justify-content-end">
        <button
          className="btn btn-outline-light transparent-button d-flex align-items-center"
          style={rightBorderRadius}
        >
          Kontak Kami{" "}
          <div style={circleStyle}>
            <ImPhone />
          </div>
        </button>
      </div>
    </div>
  </footer>
);

const circleStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  border: "1px solid",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10px",
};

const rightBorderRadius = {
  borderRadius: "30px",
};

export default Footer;
