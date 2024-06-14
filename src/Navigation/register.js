import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Loginimg from "../assets/images/Group 51.png";
import "../assets/customcss/logreg.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      navigate("/login");
    } else {
      alert("Registrasi gagal");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
    >
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
        <Col
          lg={6}
          className="form-login d-flex justify-content-start align-items-center p-3"
        >
          <div
            className="w-100 form-container mr-2"
            style={{ marginTop: "0px" }}
          >
            <h1 className="text-center mb-5 text-primary">Sign Up</h1>
            <Form className="m-3" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  className="input-login"
                  type="text"
                  placeholder="Masukkan Nama Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                    borderBottom: "1px solid #000",
                    borderRadius: "0px",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="input-login"
                  type="email"
                  placeholder="Masukkan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="input-login"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                    borderBottom: "1px solid #000",
                    borderRadius: "0px",
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                style={{ height: "45px" }}
              >
                Registrasi
              </Button>
            </Form>
            <div className="px-3">
              <p className="text-primary text-center mt-3">
                Sudah Memiliki Akun? <Link to="/login">Login Disini</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
