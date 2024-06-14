import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ImArrowUpRight2 } from "react-icons/im";

const BMIForm = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("0");
  const [calories, setCalories] = useState("0");
  const [hydration, setHydration] = useState("0");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    const dailyCalories =
      gender === "male"
        ? 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
        : 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    setCalories(dailyCalories.toFixed(2));

    const dailyHydration = (weight * 0.033).toFixed(2);
    setHydration(dailyHydration);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    activity: "",
  });

  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <div className="container border rounded-4 p-5">
            <h2 style={{ textAlign: "center" }}>Parameter Tubuh</h2>
            <Form>
              <Form.Group controlId="formGender" className="mb-2">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={{
                    backgroundColor: "lightblue",
                  }}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  style={{
                    backgroundColor: "lightblue",
                  }}
                />
              </Form.Group>
              <div className="row">
                <Form.Group controlId="formWeight" className="col">
                  <Form.Label>Weight (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    style={{
                      backgroundColor: "lightblue",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formHeight" className="col">
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{
                      backgroundColor: "lightblue",
                    }}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <label htmlFor="activity" className="form-label">
                  Aktivitas harian
                </label>
                <select
                  className="form-select"
                  id="activity"
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  style={{ backgroundColor: "lightblue" }}
                >
                  <option value="">Select Activity Level</option>
                  <option value="sedentary">
                    Sedentary (little or no exercise)
                  </option>
                  <option value="light">
                    Lightly active (light exercise/sports 1-3 days/week)
                  </option>
                  <option value="moderate">
                    Moderately active (moderate exercise/sports 3-5 days/week)
                  </option>
                  <option value="active">
                    Very active (hard exercise/sports 6-7 days a week)
                  </option>
                  <option value="extra">
                    Extra active (very hard exercise & physical job or 2x
                    training)
                  </option>
                </select>
              </div>

              <Button
                variant="primary"
                onClick={calculateBMI}
                className="btn btn-primary d-flex align-items-center justify-content-center rounded-3"
                style={{
                  width: "100%",
                  height: "50px",
                }}
              >
                Hitung
                <div style={circleStyle}>
                  <ImArrowUpRight2 />
                </div>
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div className="col">
            <div
              className="container p-5 rounded-4"
              style={{
                backgroundColor: "#1F76F8",
                height: "500px",
              }}
            >
              {bmi && (
                <div className="mb-5">
                  <h5 className="text-center" style={{ color: "white" }}>
                    Hasil Pengukuran
                  </h5>
                  <h4
                    className="text-center"
                    style={{ color: "white", padding: "20px" }}
                  >
                    BMI
                  </h4>
                  <h5
                    className="col-md-2 text-center"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "100px",
                      margin: "auto",
                    }}
                  >
                    {bmi}
                  </h5>
                  <h4
                    className="text-center"
                    style={{ color: "white", padding: "20px" }}
                  >
                    Berat Badan Ideal
                  </h4>
                  <div className="px-3 mt-5">
                    <div className="row d-flex justify-content-center mb-3">
                      <div className="col-9">
                        <h5
                          style={{ color: "white" }}
                          className="pb-2 border-bottom align-item"
                        >
                          Kebutuhan Kalori Harian
                        </h5>
                      </div>
                      <div
                        className="col-3 d-flex justify-content-center"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <h5>{calories} Kcal</h5>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-9">
                        <h5
                          style={{ color: "white" }}
                          className="pb-2 border-bottom"
                        >
                          Tingkat Hidrasi Harian
                        </h5>
                      </div>
                      <div
                        className="col-3 d-flex justify-content-center"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <h5>{hydration} Liter</h5>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

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

export default BMIForm;
