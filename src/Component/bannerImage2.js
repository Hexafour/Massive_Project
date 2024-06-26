import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
import { GrGift } from "react-icons/gr";

const ImageCard = ({
  imageSrc,
  title,
  styles,
  txtStyles,
  isDescription = false,
  isButtonOpen = false,
  isImageIn = false,
}) => {
  const navigate = useNavigate();
  const redirectToPage = () => {
    navigate();
  };

  if (isImageIn) {
    return (
      <div
        className="container p-5 rounded-4"
        style={{
          backgroundColor: "#1F76F8",
        }}
      >
        <div className="row col-12 py-2">
          <div className="col-12 col-lg-7">
            <h5 className="card-title" style={txtStylesTitle}>
              {title}
            </h5>
            <p className="card-text" style={txtStylesDesc}>
              Dapatkan motivasi harian dari Lyfe untuk membuatmu tetap semangat
              menerapkan Gaya Hidup Sehat
            </p>
          </div>
          <div className="col-12 col-lg-5"></div>
        </div>
      </div>
    );
  } else {
    return (
      <Card className="text-white">
        <Card.Img style={styles} src={imageSrc} alt="Card image" />
        <Card.ImgOverlay className="d-flex align-items-center">
          <div>
            <h1 style={txtStyles}>{title}</h1>
            {isDescription ? (
              <p>
                Dapatkan motivasi harian dari Lyfe untuk membuatmu tetap
                semangat menerapkan Gaya Hidup Sehat
              </p>
            ) : null}
          </div>
        </Card.ImgOverlay>
      </Card>
    );
  }
};

const openButtonContainer = {
  paddingTop: "5%",
};

const openButtonStyle = {
  borderRadius: "30px",
  backgroundColor: "white",
};

const circleBtnStyle = {
  width: "25px",
  height: "25px",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10px",
};

const txtStylesTitle = {
  fontSize: "48px",
  fontWeight: "bold",
  color: "white",
};

const txtStylesDesc = {
  fontSize: "18px",
  color: "white",
  paddingTop: "20px",
};

const imgStyles = {
  width: "470px",
  height: "260px",
};

export default ImageCard;
