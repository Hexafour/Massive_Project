import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const PengaturanAkun = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <div className="container clight rounded-4 p-5 my-5">
        <h2 className="fw-bold">Pengaturan Akun</h2>
        <div className="d-flex align-items-center mt-5">
          <div
            className="rounded-3 me-5"
            style={{
              width: "200px",
              height: "200px",
              backgroundImage: `url(assets/image4.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="w-100">
            <div className="d-flex align-items-center mt-4">
              <label style={{ width: "100px" }}>Nama</label>
              <input type="text" className="form-control ms-5"></input>
            </div>
            <div className="d-flex align-items-center mt-4">
              <label style={{ width: "100px" }}>Email</label>
              <input type="email" className="form-control ms-5"></input>
            </div>
            <div className="d-flex align-items-center mt-4">
              <label style={{ width: "100px" }}>Password</label>
              <input type="password" className="form-control ms-5"></input>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PengaturanAkun;
