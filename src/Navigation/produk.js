import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Card } from 'react-bootstrap';
import Navbar from "../Component/Navbar"
import Footer from "../Navigation/footer"
import Gambar from "../assets/images/smartwatch.png"
import Gambar2 from "../assets/images/airpurifier.png"
import Gambar3 from "../assets/images/treadmil.png"
import Gambar4 from "../assets/images/glucometer.png"
import Gambar5 from "../assets/images/electrictooth.png"
import Gambar6 from "../assets/images/earphone.png"
import Gambar7 from "../assets/images/basket.png"
import Gambar8 from "../assets/images/yoga.png"
import Gambar9 from "../assets/images/raket.png"
import Gambar10 from "../assets/images/sepeda.png"
import Gambar11 from "../assets/images/dumbell.png"
import Gambar12 from "../assets/images/handfrip.png"


const Filter = () => {
  const [cardsInfo, setCardsInfo] = useState({
    first: {
      imageSrcs: [
        Gambar,
        Gambar2,
        Gambar3,
        Gambar4,
        Gambar5,
        Gambar6
      ],
      titles: ["Smart Watch", "Air Purifier", "Treadmil", "Gloco Meter", "Electric Toothbrush", "Earphone"]
    },
    second: {
      imageSrcs: [
        Gambar7,
        Gambar8,
        Gambar9,
        Gambar10,
        Gambar11,
        Gambar12
      ],
      titles: ["Bola Basket", "Yoga Mat", "Raket", "Sepeda", "Dumbell", "Hand Grip"]
    },
    third: {
      imageSrcs: [
        'https://via.placeholder.com/150?text=Tab+3+Card+1',
        'https://via.placeholder.com/150?text=Tab+3+Card+2',
        'https://via.placeholder.com/150?text=Tab+3+Card+3',
        'https://via.placeholder.com/150?text=Tab+3+Card+4',
        'https://via.placeholder.com/150?text=Tab+3+Card+5',
        'https://via.placeholder.com/150?text=Tab+3+Card+6'
      ],
      titles: ["Susu", "Roti", "Buah Segar", "Sayuran", "Snack Sehat", "Minuman Energi"]
    },
    fourth: {
      imageSrcs: [
        'https://via.placeholder.com/150?text=Tab+4+Card+1',
        'https://via.placeholder.com/150?text=Tab+4+Card+2',
        'https://via.placeholder.com/150?text=Tab+4+Card+3',
        'https://via.placeholder.com/150?text=Tab+4+Card+4',
        'https://via.placeholder.com/150?text=Tab+4+Card+5',
        'https://via.placeholder.com/150?text=Tab+4+Card+6'
      ],
      titles: ["Gelang", "Topi", "Kacamata", "Sabuk", "Scarf", "Gelang Kaki"]
    }
  });

  const handleTabChange = (eventKey) => {
    const { imageSrcs } = cardsInfo[eventKey];
    setCardsInfo({
      ...cardsInfo,
      [eventKey]: {
        ...cardsInfo[eventKey],
        imageSrcs
      }
    });
  };

  return (
    <>
    <Navbar />
    <div className="mt-1 py-1 mb-1 container">
        <div
          className="container mt-5 rounded-4 overflow-hidden"
          style={{
            width: "100%",
            backgroundImage: `url(assets/bannerProduct.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="row rounded-5 align-items-center"
            style={{ height: "300px" }}
          >
            <div className="col-12 col-md-12 p-5">
              <div className="row justify-content-center align-items-center">
                <h2 className="pb-1">
                  <span className="text-white">
                    Temukan produk gaya hidup yang kamu butuhkan!
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <Container>
      <Row className="mt-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className='custom-tabs p-5' style={{borderRadius: "20px"}}>
            <Row>
              <h4 className='pb-2'>Filter</h4>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column" onSelect={handleTabChange}>
                  <Nav.Item>
                    <Nav.Link eventKey="first">Gadget</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Alat Olahraga</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Konsumsi</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Aksesoris</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {[...Array(6)].map((_, index) => (
                        <Col key={index} sm={4} className="mb-4">
                          <Card className='custom-card'>
                            <Card.Img variant="top" src={cardsInfo.first.imageSrcs[index]} />
                            <Card.Body>
                              <Card.Title>{`${cardsInfo.first.titles[index]}`}</Card.Title>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {[...Array(6)].map((_, index) => (
                        <Col key={index} sm={4} className="mb-4">
                          <Card className='custom-card'>
                            <Card.Img variant="top" src={cardsInfo.second.imageSrcs[index]} />
                            <Card.Body>
                              <Card.Title>{`${cardsInfo.second.titles[index]}`}</Card.Title>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {[...Array(6)].map((_, index) => (
                        <Col key={index} sm={4} className="mb-4">
                          <Card className='custom-card'>
                            <Card.Img variant="top" src={cardsInfo.third.imageSrcs[index]} />
                            <Card.Body>
                              <Card.Title>{`${cardsInfo.third.titles[index]}`}</Card.Title>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Row>
                      {[...Array(6)].map((_, index) => (
                        <Col key={index} sm={4} className="mb-4">
                          <Card className='custom-card'>
                            <Card.Img variant="top" src={cardsInfo.fourth.imageSrcs[index]} />
                            <Card.Body>
                              <Card.Title>{`${cardsInfo.fourth.titles[index]}`}</Card.Title>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </div>
        </Tab.Container>
      </Row>
    </Container>
    <Footer />
    </>
  );
};

export default Filter;
