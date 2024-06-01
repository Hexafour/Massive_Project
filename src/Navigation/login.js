import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Loginimg from '../assets/images/Group 51.png'
import '../assets/customcss/login.css'


function Login() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center">
        <Row className="w-100 no-gutters">
          <Col lg={6} className="d-flex justify-content-center align-items-center">
            <img src={Loginimg} alt="Gambar" className="img-fluid" style={{ objectFit: 'cover',  borderRadius: '20px' }} />
          </Col>
          <Col lg={6} className="d-flex justify-content-center align-items-center p-2 bg-light">
            <div className="form-container pb-5">
              <Form className='m-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100'>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
export default Login;