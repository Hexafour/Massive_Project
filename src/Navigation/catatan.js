import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Dropdown, DropdownButton, Form, FormControl } from "react-bootstrap";
import Navbar from "../Component/Navbar";
import Button from "react-bootstrap/Button";
import { ImPhone } from "react-icons/im";
import Logo from "../assets/images/iconWeb.png";
import "../assets/customcss/catatan.css";
import Footer from "../Navigation/footer";

function Catatan() {
  const [selectedOption, setSelectedOption] = useState("Pilih Catatan");

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  return (
    <>
      <Navbar />

      <Container>
        <Row className="pt-3">
          <div
            className="justify-content-center p-5"
            style={{
              backgroundColor: "#ECF4FA",
              borderRadius: "20px",
            }}
          >
            <div className="catatan">
              <h2
                className="pb-4"
                style={{
                  color: "#1F2223",
                }}
              >
                Catatan
              </h2>
              <DropdownButton
                id="dropdown-basic-button"
                title={selectedOption} // Menampilkan opsi yang dipilih sebagai judul dropdown
                onSelect={handleSelect}
                className="pb-4 "
                style={{
                  color: "#253751",
                }}
              >
                <Dropdown.Item
                  eventKey="Opsi 1"
                  className="custom-dropdown-item"
                >
                  Opsi 1
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Opsi 2"
                  className="custom-dropdown-item"
                >
                  Opsi 2
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Opsi 3"
                  className="custom-dropdown-item"
                >
                  Opsi 3
                </Dropdown.Item>
              </DropdownButton>

              <Form.Group className="pb-4">
                <Form.Control as="textarea" rows={6} />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  Simpan
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Catatan;
