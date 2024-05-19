import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../assets/customcss/tersimpan.css"
import Cards from "../Component/Cards"
import Gambar from "../assets/images/Article_Card1.png"
import { Col, Container, Row } from 'react-bootstrap'  
import Logo from "../assets/images/iconWeb.png"
import { ImPhone } from "react-icons/im";


const cardsData = [
  { imgsrc: Gambar, title: 'Shoes' },
  { imgsrc: Gambar, title: 'Headband' },
  { imgsrc: Gambar, title: 'Makanan' },
  { imgsrc: Gambar, title: 'Suplemen' },
  { imgsrc: Gambar, title: 'Alat Olahraga' },
  { imgsrc: Gambar, title: 'Wristband' },
];

const cardsData2 = [
  { imgsrc: Gambar, title: 'Artikel 1' },
  { imgsrc: Gambar, title: 'Artikel 2' },
  { imgsrc: Gambar, title: 'Artikel 3' },
  { imgsrc: Gambar, title: 'Artikel 4' },
  { imgsrc: Gambar, title: 'Artikel 5' },
  { imgsrc: Gambar, title: 'Artikel 6' },
];

const cardsData3 = [
  { imgsrc: Gambar, title: 'Praktikal 1' },
  { imgsrc: Gambar, title: 'Praktikal 2' },
  { imgsrc: Gambar, title: 'Praktikal 3' },
  { imgsrc: Gambar, title: 'Praktikal 4' },
  { imgsrc: Gambar, title: 'Praktikal 5' },
  { imgsrc: Gambar, title: 'Praktikal 6' },
];


function Tersimpan() {
    return (
     <>
     <div className='tersimpan mt-5 p-3 mx-5'>

    <h2 className='fs-3'>Item Tersimpan</h2> 

    <Tabs
    defaultActiveKey="produk"
    id="fill-tab-example"
    className= "mb-3"
    fill
    >
    <Tab eventKey="produk" title="Produk">
      <Row className="">
        {cardsData.map((card, index) => (
          <Col md={4} className="mb-4" key={index}>
          <a href='https://google.com' style = {{ textDecoration: 'none' }}><Cards  imgsrc={card.imgsrc} title={card.title} /></a>
          </Col>
        ))}
      </Row>
    </Tab>
    <Tab eventKey="artikel" title="Artikel">
     <Row className="">
        {cardsData2.map((card, index) => (
          <Col md={4} className="mb-4" key={index}>
          <a href='https://google.com' style = {{ textDecoration: 'none' }}><Cards  imgsrc={card.imgsrc} title={card.title} /></a>
          </Col>
        ))}
      </Row>
    </Tab>
    <Tab eventKey="praktikal" title="Praktikal">
      <Row className="">
        {cardsData3.map((card, index) => (
          <Col md={4} className="mb-4" key={index}>
          <a href='https://google.com' style = {{ textDecoration: 'none' }}><Cards  imgsrc={card.imgsrc} title={card.title} /></a>
          </Col>
        ))}
      </Row>
    </Tab>
    </Tabs>

    </div>
      <Container fluid className="p-5 mt-5 text-light" style = {{ backgroundColor: "#253751" }}>

        <Footer />

      </Container>
     </>
    );
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


  export default Tersimpan;

