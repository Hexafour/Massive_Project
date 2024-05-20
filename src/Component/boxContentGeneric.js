import React from "react";

const BoxContent = ({ imageSrc, title, subtitle }) => {
  const cardStyles = {
    backgroundColor: "#f0f0f0",
    borderRadius: "20px",
    padding: "50px",
    maxWidth: "600px",
    margin: "20px",
  };

  const imgStyles = {
    width: "72px",
    height: "auto",
  };

  const titleStyles = {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "10px 0 5px",
    paddingBottom: "15px",
  };

  const subtitleStyles = {
    fontSize: "20px",
    color: "#1F2223",
    margin: "0 0 10px",
  };

  const circleStyle = {
    width: "104px",
    height: "104px",
    borderRadius: "50%",
    border: "1px solid #1F2223",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
  };

  const paddingDesc = {
    paddingTop: "30px",
  };

  return (
    <div style={cardStyles}>
      <div style={circleStyle}>
        <img src={imageSrc} alt="CardImage" style={imgStyles} />
      </div>
      <div style={paddingDesc}>
        <h3 style={titleStyles}>{title}</h3>
        <h5 style={subtitleStyles}>{subtitle}</h5>
      </div>
    </div>
  );
};

export default BoxContent;
