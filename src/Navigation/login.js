import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Loginimg from '../assets/images/Group 51.png'
import "../assets/customcss/logreg.css"
import Google from '../assets/images/devicon_google.png'
import Facebook from '../assets/images/logos_facebook.png'



function Login() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center vh-100">
        <Row className="w-100 no-gutters">
        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="w-100">
            <img
              src={Loginimg}
              alt="Gambar"
              style={{
                objectFit: "cover",
                borderRadius: "20px",
                width: "100%",
                height: "650px",
              }}
            />
          </div>
        </Col>
          <Col lg={6} className="form-login d-flex justify-content-start align-items-center p-3">
            
            <div className="w-100 form-container mr-2" style={{marginTop: '0px'}}>
              <h1 className='text-center mb-5 text-primary'>Sign In</h1>
              <Form className='m-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                  className='input-login'
                  type="email"
                  placeholder="Enter email"
                  style={{
                    width: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                    borderBottom: "1px solid #000",
                    borderRadius: "0px",
                  }}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                  className='input-login'
                  type="password"
                  placeholder="Password"
                  style={{
                    width: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                    borderBottom: "1px solid #000",
                    borderRadius: "0px",
                  }}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <a className= 'text-dark' href='forgot'>Forgot Password</a>
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100' style={{height: '45px'}}>
                  Submit
                </Button>
              </Form>
            <div className='px-3'>
            <p className='text-primary text-center mt-3'>Don't Have an Account?  <Link to='/register'>Create Your Account</Link></p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
export default Login;