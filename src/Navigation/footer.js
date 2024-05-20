import React from 'react';
import brand from '../assets/images/brandTextWhite.png';
import { Image } from 'react-bootstrap';
import { ImPhone } from "react-icons/im";

const Footer = () => {
  return (
    <footer style={backgroundFooter} className="text-white py-5">
      <div className="container" style={{marginTop: '50px'}}>
        <div className="row justify-content-between">
          <div className="col-md-5 text-md-left">
            <div className="d-flex align-items-center">
              <Image src={brand} style={{ width: '118px', height: '44.14px', marginRight: '20px' }} />
              <div style={whiteLineVertical} />
              <h3 style={gapLineLeft} className="mb-0">Your Lifestyle Guidance</h3>
            </div>
          </div>
          <div className="col-md-5 text-md-right">
            <p>Lyfe 2024 Copyright Reserved. Free Healthy Lifestyle guidance for everyone</p>
            <div style={openButtonContainer}>
              <button className="btn btn-light btn-lg d-flex align-items-center" style={openButtonStyle}>Bussiness Contact<div style={circleStyle}><ImPhone /></div></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const backgroundFooter = {
  backgroundColor: '#253751',
  marginTop: '20px'
};

const whiteLineVertical = {
  height: '30px',
  width: '1px',
  backgroundColor: 'white',
};

const gapLineLeft = {
  paddingLeft: '20px'
}

const openButtonStyle = {
  borderRadius: '30px',
};

const circleStyle = {
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  border: '1px solid',
  alignSelf: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '10px'
};

const openButtonContainer = {

};

export default Footer;
