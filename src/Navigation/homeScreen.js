import React from "react";
import { ImPhone } from "react-icons/im";
import { ImArrowUpRight2 } from "react-icons/im";
import CarouselHome from "./../Component/Carousel";

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4">
          <div style={cyanBox}>
            <div
              style={paddingContent}
              className="h-100 d-flex flex-column justify-content-between"
            >
              <div>
                <h1 style={heading} className="fw-normal">
                  Apa itu - Gaya Hidup Sehat?
                </h1>
                <p className="fs-5">
                  Lyfe membantu anda memami Gaya Hidup sehat dengan cara yang
                  simpel dan interaktif.
                </p>
              </div>
              <div className="">
                <button
                  className="d-flex flex-row btn btn-outline-dark transparent-button"
                  style={rightBorderRadius}
                >
                  Pelajari Selengkapnya{" "}
                  <div style={circleStyle}>
                    <ImArrowUpRight2 />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <CarouselHome />
        </div>
      </div>

      <div className="container" style={paddingContent}></div>

      <div style={blueBox}>
        <div className="col-lg-12">
          <div className="d-flex justify-content-between">
            <button className="btn btn-light btn-lg" style={openButtonStyle}>
              Motivasi Untukmu
            </button>
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
      </div>
    </div>
  );
}

const heading = {
  fontSize: "72px",
};

const cyanBox = {
  display: "flex",
  flexDirection: "column",
  height: "650px",
  backgroundColor: "#DDEBFF",
  borderRadius: "20px",
};

const openButtonStyle = {
  borderRadius: "30px",
};

const paddingContent = {
  padding: "20px",
};

const paddingContainer = {
  position: "absolute",
  bottom: "25%",
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

const blueBox = {
  backgroundColor: "#3E8CFF",
  borderRadius: "20px",
  padding: "30px",
};

const rightBorderRadius = {
  borderRadius: "30px",
};

export default Home;
