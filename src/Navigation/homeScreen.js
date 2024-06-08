import React from "react";
import { ImPhone } from "react-icons/im";
import { ImArrowUpRight2 } from "react-icons/im";
import CarouselHome from "./../Component/Carousel";
import ImageCard from "../Component/bannerImage";
import bannerProduct from "../assets/images/bannerProduct.png";
import BoxContent from "../Component/boxContentGeneric";
import Aperture from "../assets/images/aperture.png";
import Airplay from "../assets/images/airplay.png";
import {
  BsBookmark,
  BsCheck2Square,
  BsHandThumbsUp,
  BsJournals,
} from "react-icons/bs";
import Langkah1 from "../assets/images/langkah1.png";
import Langkah2 from "../assets/images/langkah2.png";
import Langkah3 from "../assets/images/langkah3.png";
import Langkah4 from "../assets/images/langkah4.png";
import BannerTwo from "../assets/images/bannerTwo.png";
import SwipeToSlide from "./../Component/Slider";
import Personal_Form from "../Component/formPersonal";
import Navbar from "../Component/Navbar";
import Footer from "../Navigation/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-5">
            <div style={cyanBox} className="px-4 py-3 row">
              <div className="col align-self-start">
                <h1 style={TitleStyle}>
                  Kehidupan yang lebih baik dengan Gaya Hidup Sehat
                </h1>
                <p style={DescTextStyle}>
                  Lyfe membantu anda mencapai Gaya Hidup sehat dengan cara yang
                  simpel dan terstruktur.
                </p>
              </div>
              <div>
                <button
                  className="btn btn-outline-dark transparent-button d-flex align-items-center mb-3"
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
          <div className="col-lg-7">
            <CarouselHome />
          </div>
        </div>
      </div>

      <div className="mt-4 mb-5 container">
        <ImageCard
          imageSrc={BannerTwo}
          title="Motivasi Untuk Kamu"
          txtStyles={txtCardStyles}
          isDescription={false}
          isButtonOpen={true}
          isImageIn={true}
        />
      </div>

      <div className="container my-5 py-5">
        <div className="col-12 col-md-6">
          <h1>Kalkulator Gaya Hidup</h1>
          <p>
            Badan yang sehat adalah salah satu tujuan dari penerapan gaya hidup
            sehat. gunakan kalkulator gaya hidup untuk mengetahui parameter
            kesehatan tubuh kamu.
          </p>
        </div>
        <div className="row gap-2">
          <div className="col">
            <Personal_Form />
          </div>
          <div className="col">
            <div
              className="container p-5 rounded-4"
              style={{
                backgroundColor: "#1F76F8",
              }}
            >
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
                <h3
                  className="col-md-2 text-center"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "100px",
                    margin: "auto",
                  }}
                >
                  100
                </h3>
                <h4
                  className="text-center"
                  style={{ color: "white", padding: "20px" }}
                >
                  Berat Badan Ideal
                </h4>
              </div>
              <div className="px-3">
                <div className="row d-flex justify-content-center mb-3">
                  <div className="col-9">
                    <h5
                      style={{ color: "white" }}
                      className="pb-2 border-bottom"
                    >
                      Kebutuhan Kalori Harian
                    </h5>
                  </div>
                  <div
                    className="col-3 d-flex justify-content-center"
                    style={{ backgroundColor: "white", borderRadius: "10px" }}
                  >
                    <h4>2000 Kcal</h4>
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
                    style={{ backgroundColor: "white", borderRadius: "10px" }}
                  >
                    <h4>1.5 Liter</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="col-12 col-md-6">
          <h1>Terapkan Gaya Hidup Sehat dengan alur berikut</h1>
          <p>
            Cara mudah dan praktis yang telah disiapkan untuk kamu memulai
            perjalanan mencapai gaya hidup sehat
          </p>
        </div>
        <div style={contentContainer} className="row gap-4">
          <BoxContent
            imageSrc={Langkah1}
            title="Langkah Penerapan Gaya Hidup Sehat"
            subtitle="Sebuah langkah awal yang akan membuat hidup kamu menjadi lebih baik"
            link={"/genericTutorial"}
            isButton={true}
            isTutorial={true}
          />
          <BoxContent
            imageSrc={Langkah2}
            title="Membangun Pola Tidur yang Sehat"
            subtitle="Sebuah langkah awal yang akan membuat hidup kamu menjadi lebih baik"
            link={"/genericTutorial"}
            isButton={true}
            isTutorial={true}
          />
        </div>
        <div style={contentContainer} className="row gap-4 mt-4">
          <BoxContent
            imageSrc={Langkah3}
            title="Menjaga Kesehatan Mental Saat Bersosial"
            subtitle="Sebuah langkah awal yang akan membuat hidup kamu menjadi lebih baik"
            link={"/genericTutorial"}
            isButton={true}
            isTutorial={true}
          />
          <BoxContent
            imageSrc={Langkah4}
            title="Menjaga Berat Badan Agar Tetap Sehat"
            subtitle="Sebuah langkah awal yang akan membuat hidup kamu menjadi lebih baik"
            link={"/genericTutorial"}
            isButton={true}
            isTutorial={true}
          />
        </div>
      </div>

      {/* banner card */}
      <div className="mt-5 py-5 mb-5 container">
        <div
          className="container mt-5 rounded-4 overflow-hidden"
          style={{
            width: "100%",
            backgroundImage: `url(assets/bannerProduct.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="row rounded-5 align-items-center"
            style={{ height: "300px" }}
          >
            <div className="col-12 col-md-12 p-5">
              <div className="row justify-content-center align-items-center">
                <h2 className="pb-2">
                  <span className="text-white">
                    Temukan produk gaya hidup yang kamu butuhkan!
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row gap-4">
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
          <div className="row gap-4 mt-4">
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
      </div>

      <Footer />
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

const imageCardStyle = {
  borderRadius: "20px",
};

const txtCardStyles = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "white",
};

const contentContainer = {
  justifyContent: "center",
};

const headerBox = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  height: "195px",
  backgroundColor: "#F2F2F2",
  borderRadius: "20px",
};

const paddingButtonHeader = {
  padding: "20px",
};

const btnTopBorderRadius = {
  borderRadius: "10px",
  width: "284px",
  height: "64px",
};

const iconStyle = {
  width: "25px",
  height: "25px",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10px",
};

const titleTxt = {
  color: "black",
  paddingLeft: "11%",
};

const paddingContentBottom = {
  paddingLeft: 60,
  paddingRight: 60,
};

const paddingRow = {
  paddingRight: "60px",
  paddingLeft: "60px",
  paddingTop: "80px",
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
