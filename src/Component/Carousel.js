import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const images = [
  {
    src: require("../assets/images/Article_Card1.png"),
    title: "Peran Teknologi Dalam Gaya Hidup Sehat",
    link: "/image1",
  },
  {
    src: "https://via.placeholder.com/400",
    title: "Image 2",
    link: "/image2",
  },
  {
    src: "https://via.placeholder.com/400",
    title: "Image 3",
    link: "/image3",
  },
];

function ImageViewer() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const redirectToPage = () => {
    navigate(images[index].link);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            indicators={false}
            controls={false}
          >
            {images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <div>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.title}
                    style={imgStyles}
                  />
                </div>
                <Carousel.Caption style={carouselOption}>
                  <h1>{image.title}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            <div style={openButtonContainer}>
              <button
                className="btn btn-light btn-lg d-flex align-items-center"
                style={openButtonStyle}
                onClick={redirectToPage}
              >
                Buka
                <div style={circleStyle}>
                  <ImArrowUpRight2 />
                </div>
              </button>
            </div>
            <div className="row" style={carouselButton}>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-light transparent-button d-flex align-items-center"
                  style={rightBorderRadius}
                  onClick={() =>
                    setIndex((prevIndex) =>
                      prevIndex === 0 ? images.length - 1 : prevIndex - 1
                    )
                  }
                >
                  Prev
                  <div style={circleCarouselLeftBtnStyle}>
                    <AiOutlineLeft />
                  </div>
                </button>
                <div style={paddingContent} />
                <button
                  className="btn btn-outline-light transparent-button d-flex align-items-center"
                  style={rightBorderRadius}
                  onClick={() =>
                    setIndex((prevIndex) => (prevIndex + 1) % images.length)
                  }
                >
                  <div style={circleCarouselRightBtnStyle}>
                    <AiOutlineRight />
                  </div>
                  Next
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

const imgStyles = {
  height: "650px",
  objectFit: "cover",
  borderRadius: "20px",
};

const carouselOption = {
  position: "absolute",
  left: "5%",
  right: "50%",
  bottom: "0%",
  textAlign: "left",
  transform: "none",
};

const rightBorderRadius = {
  borderRadius: "20px",
};
const carouselButton = {
  position: "absolute",
  bottom: "5%",
  right: "5%",
};
const openButtonContainer = {
  position: "absolute",
  top: "5%",
  right: "5%",
};
const openButtonStyle = {
  borderRadius: "30px",
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
const circleCarouselRightBtnStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  border: "1px solid",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "5px",
};
const circleCarouselLeftBtnStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  border: "1px solid",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "5px",
};
const paddingContent = {
  padding: "5px",
};

export default ImageViewer;
