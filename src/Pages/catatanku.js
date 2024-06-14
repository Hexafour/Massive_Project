import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navbar from "../Component/Navbar";
import Footer from "../Navigation/footer";

function Catatanku() {
  return (
    <>
      <Navbar />
      <Container>
        <Row
          className="p-5 mt-5"
          style={{
            backgroundColor: "#ECF4FA",
            borderRadius: "20px",
          }}
        >
          <h2>Catatanku</h2>

          <Col
            md={5}
            className="bg-light p-4 mt-3"
            style={{
              marginLeft: "40px",
              borderRadius: "20px",
            }}
          >
            <h2
              className="fs-4 p-4"
              style={{
                backgroundColor: "#253751",
                color: "#FFF",
                borderRadius: "10px",
              }}
            >
              Praktikal
            </h2>
            <div>
              <p className="fs-5 pt-4">Cara Menurunkan Berat Badan.</p>
              <div className="btn d-flex flex-column">
                <Button
                  href="/link1"
                  className="mb-2 p-2"
                  style={{
                    backgroundColor: "transparent",
                    color: "#000000",
                    borderColor: "#C5C5C5",
                  }}
                >
                  Catatan Step 1
                </Button>
                <Button
                  href="/link2"
                  className="p-2"
                  style={{
                    backgroundColor: "transparent",
                    color: "#000000",
                    borderColor: "#C5C5C5",
                  }}
                >
                  Catatan Step 2
                </Button>
              </div>
            </div>
            <div>
              <p className="fs-5 pt-4">Cara Menjaga Pola Tidur Sehat.</p>
              <div className="btn d-flex flex-column">
                <Button
                  href="/link1"
                  className="mb-2 p-2"
                  style={{
                    backgroundColor: "transparent",
                    color: "#000000",
                    borderColor: "#C5C5C5",
                  }}
                >
                  Catatan Step 1
                </Button>
                <Button
                  href="/link2"
                  className="p-2"
                  style={{
                    backgroundColor: "transparent",
                    color: "#000000",
                    borderColor: "#C5C5C5",
                  }}
                >
                  Catatan Step 2
                </Button>
              </div>
            </div>
          </Col>
          <Col
            md={5}
            className="bg-light p-4 mt-3"
            style={{
              marginLeft: "80px",
              borderRadius: "20px",
            }}
          >
            <h2
              className="fs-4 p-4"
              style={{
                backgroundColor: "#253751",
                color: "#FFF",
                borderRadius: "10px",
              }}
            >
              Artikel
            </h2>
            <div>
              <div className="btn d-flex flex-column">
                <Button
                  href="/link1"
                  className="mb-2 p-2"
                  style={{
                    backgroundColor: "transparent",
                    color: "#000000",
                    borderColor: "#C5C5C5",
                  }}
                >
                  Apa Itu Gaya Hidup Sehat?
                </Button>
                <Button
                  href="/link2"
                  className="p-2"
                  style={{
                    backgroundColor: "transparent",
                    color: "#000000",
                    borderColor: "#C5C5C5",
                  }}
                >
                  Peran Teknologi untuk Gaya Hidup Sehat
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Catatanku;
