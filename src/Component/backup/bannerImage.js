import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const ImageCard = ({ imageSrc, title, styles, txtStyles }) => {
  return (
    <Card className="text-white">
      <Card.Img style={styles} src={imageSrc} alt="Card image" />
      <Card.ImgOverlay className="d-flex align-items-center">
        <Card.Title style={txtStyles}>{title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ImageCard;
