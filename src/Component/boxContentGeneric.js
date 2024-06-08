import React from "react";
import { useNavigate } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";

const BoxContent = ({
  imageSrc,
  title,
  subtitle,
  link,
  isButton = false,
  isTutorial = false,
}) => {
  const navigate = useNavigate();

  const cardStyles = {
    backgroundColor: "#ECF4FA",
  };

  const imgStyles = {
    width: "auto",
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

  const openButtonContainer = {
    paddingTop: "5%",
  };

  const circleBtnStyle = {
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

  const openButtonStyle = {
    borderRadius: "30px",
    backgroundColor: "white",
  };

  const redirectToPage = (link) => () => {
    navigate(link);
  };

  return (
    <div style={cardStyles} className="col p-5 rounded-3">
      {/* <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}> */}
      {!isTutorial ? (
        <div style={circleStyle} className="">
          <img src={imageSrc} alt="CardImage" />
        </div>
      ) : null}
      <div style={!isTutorial ? paddingDesc : null}>
        {isTutorial ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, marginRight: "20px" }}>
              <h3 style={titleStyles}>{title}</h3>
              <h5 style={subtitleStyles}>{subtitle}</h5>
              {isButton && (
                <div style={openButtonContainer}>
                  <button
                    className="btn btn-light btn-lg d-flex align-items-center"
                    style={openButtonStyle}
                    onClick={redirectToPage(link)}
                  >
                    Buka
                    <div style={circleBtnStyle}>
                      <ImArrowUpRight2 />
                    </div>
                  </button>
                </div>
              )}
            </div>
            <div>
              <img src={imageSrc} alt="CardImage" />
            </div>
          </div>
        ) : (
          <div>
            <h3 style={titleStyles}>{title}</h3>
            <h5 style={subtitleStyles}>{subtitle}</h5>
            {isButton ? (
              <div style={openButtonContainer}>
                <button
                  className="btn btn-light btn-lg d-flex align-items-center"
                  style={openButtonStyle}
                  onClick={redirectToPage}
                >
                  Buka
                  <div style={circleBtnStyle}>
                    <ImArrowUpRight2 />
                  </div>
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
      {/* </a> */}
    </div>
  );
};

export default BoxContent;
