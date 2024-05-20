import React from "react";
import { ImPhone } from "react-icons/im";
import { ImArrowUpRight2 } from "react-icons/im";
import CarouselHome from "./../Component/Carousel";
import ImageCard from "../Component/bannerImage";
import bannerProduct from "../assets/images/bannerProduct.png";
import BoxContent from "../Component/boxContentGeneric";
import Aperture from "../assets/images/aperture.png";
import Airplay from "../assets/images/airplay.png";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div style={cyanBox}>
              <div style={paddingContent}>
                <h1 style={TitleStyle}>
                  Kehidupan yang lebih baik dengan Gaya Hidup Sehat
                </h1>
                <p style={DescTextStyle}>
                  Lyfe membantu anda mencapai Gaya Hidup sehat dengan cara yang
                  simpel dan terstruktur.
                </p>
                <div style={paddingContainer}>
                  <button
                    className="btn btn-outline-dark transparent-button d-flex align-items-center"
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
          <div className="col-lg-7">
            <CarouselHome />
          </div>
        </div>
      </div>

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

      {/* banner card */}
      <div style={paddingBanner} className="mt-5">
        <ImageCard
          styles={imageCardStyle}
          imageSrc={bannerProduct}
          title="Temukan Produk Penunjang Gaya Hidup yang kamu butuhkan disini"
          txtStyles={txtCardStyles}
        />
      </div>

      <div style={contentContainer} className="row mt-3">
        <BoxContent
          imageSrc={Aperture}
          title="1. Gadget"
          subtitle="Untuk kamu yang kesulitan untuk konsisten berolahraga, cobalah dengan melakukannya selama satu menit terlebih dahulu setiap harinya. Apabila telah konsisten, kamu bisa menambah durasinya sedikit - sedikit sampai akhirnya olahraga menjadi kebiasaan rutin yang kamu lakukan."
        />
        <BoxContent
          imageSrc={Airplay}
          title="2. Perlengkapan Olahraga"
          subtitle="Untuk kamu yang kesulitan untuk konsisten berolahraga, cobalah dengan melakukannya selama satu menit terlebih dahulu setiap harinya. Apabila telah konsisten, kamu bisa menambah durasinya sedikit - sedikit sampai akhirnya olahraga menjadi kebiasaan rutin yang kamu lakukan."
        />
      </div>
      <div style={contentContainer} className="row">
        <BoxContent
          imageSrc={Aperture}
          title="3. Makanan Sehat"
          subtitle="Untuk kamu yang kesulitan untuk konsisten berolahraga, cobalah dengan melakukannya selama satu menit terlebih dahulu setiap harinya. Apabila telah konsisten, kamu bisa menambah durasinya sedikit - sedikit sampai akhirnya olahraga menjadi kebiasaan rutin yang kamu lakukan."
        />
        <BoxContent
          imageSrc={Airplay}
          title="4. Aksesoris"
          subtitle="Untuk kamu yang kesulitan untuk konsisten berolahraga, cobalah dengan melakukannya selama satu menit terlebih dahulu setiap harinya. Apabila telah konsisten, kamu bisa menambah durasinya sedikit - sedikit sampai akhirnya olahraga menjadi kebiasaan rutin yang kamu lakukan."
        />
      </div>
    </div>
  );
}

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
  bottom: "8%",
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
  margin: "80px",
  padding: "80px",
};

const rightBorderRadius = {
  borderRadius: "30px",
};

const imageCardStyle = {
  borderRadius: "20px",
};

const txtCardStyles = {
  fontSize: "24px",
  fontWeight: "bold",
};

const paddingBanner = {
  paddingTop: "5%",
  marginLeft: "80px",
  marginRight: "80px",
  // margin: "80px",
};

const contentContainer = {
  justifyContent: "center",
};

const TitleStyle = {
  fontSize: "50px",
  fontWeight: "Bold",
  fontFamilly: "Archivo",
};

const DescTextStyle = {
  fontSize: "18px",
  fontFamilly: "Instrumen Sans",
};
export default Home;
