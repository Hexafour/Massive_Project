import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown, DropdownButton, Form, FormControl } from 'react-bootstrap';
import Navbar from "../Component/Navbar"
import Button from 'react-bootstrap/Button';
import { ImPhone } from "react-icons/im";
import Logo from "../assets/images/iconWeb.png"
import "../assets/customcss/catatan.css"

function Catatan (){

    const [selectedOption, setSelectedOption] = useState('Pilih Catatan');

    const handleSelect = (eventKey) => {
      setSelectedOption(eventKey);
    };


    return (
        <>

        <Navbar/>

        <Container>
            <Row className='pt-3'>
        <div className='justify-content-center p-5' 
            style={{
              backgroundColor: "#ECF4FA",
              borderRadius: "20px"
              }}>
            <div className='catatan'>
                <h2 className='pb-4' style={{
                    color: "#1F2223"
                }}>
                    Catatan
                </h2>
                <DropdownButton
                     id="dropdown-basic-button"
                     title={selectedOption} // Menampilkan opsi yang dipilih sebagai judul dropdown
                     onSelect={handleSelect}
                     className='pb-4 '
                     style={{

                     color: "#253751"
                    }}
                >
                 <Dropdown.Item eventKey="Opsi 1" className="custom-dropdown-item">Opsi 1</Dropdown.Item>
                 <Dropdown.Item eventKey="Opsi 2" className="custom-dropdown-item">Opsi 2</Dropdown.Item>
                 <Dropdown.Item eventKey="Opsi 3" className="custom-dropdown-item">Opsi 3</Dropdown.Item>
                </DropdownButton>

                <Form.Group className='pb-4'>
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>

                <div className='d-flex justify-content-end'>
                <Button variant="primary" type="submit">
                  Simpan
                </Button>
                </div>
              </div>
        </div>
            </Row>

        </Container>

        <div className="p-5 mt-5 text-light" style = {{ backgroundColor: "#253751" }}>
        <Footer />
        </div>

        </> 
    )
}
const Footer = () => (
    <footer className='d-flex justify-content-between'>
  
    <div className='d-flex gap-3 align-items-center'>
    <img src = {Logo} width={"90px"}/> 
    <span>|</span>
    <span className='fs-4'>Your Lifestyle Guidance</span>
    </div>
  
    <div>
      <p style={{textAlign: "right"}}>Lyfe 2024 Copyright Reserved. <br />Free Healthy Lifestyle guidance for everyone </p>
      
      <div className='d-flex justify-content-end'> 
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
  )
  
  
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
  

export default Catatan