import React, { useState } from "react";
import { ImArrowUpRight2 } from "react-icons/im";

const FormExample = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    activity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container border rounded-4 p-5">
      <h2 style={{ textAlign: "center" }}>Parameter Tubuh</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{ backgroundColor: "lightblue" }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="age" className="form-label">
              Umur
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{ backgroundColor: "lightblue" }}
            />
          </div>
          <div className="col">
            <label htmlFor="weight" className="form-label">
              Berat (kg)
            </label>
            <input
              type="number"
              className="form-control"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              style={{ backgroundColor: "lightblue" }}
            />
          </div>
          <div className="col">
            <label htmlFor="height" className="form-label">
              Tinggi (cm)
            </label>
            <input
              type="number"
              className="form-control"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              style={{ backgroundColor: "lightblue" }}
            />
          </div>
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
            <option value="sedentary">Sedentary (little or no exercise)</option>
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
              Extra active (very hard exercise & physical job or 2x training)
            </option>
          </select>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            className="btn btn-primary d-flex align-items-center justify-content-center"
            style={{ width: "500px", height: "50px", borderRadius: "2000px" }}
          >
            Hitung
            <div style={circleStyle}>
              <ImArrowUpRight2 />
            </div>
          </button>
        </div>
      </form>
    </div>
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

export default FormExample;
