import React from 'react';
import BannerTwo from "../assets/images/bannerTwo.png";
import BoxContent from "../Component/boxContentGeneric";
import ImageCard from "../Component/bannerImage2";
import Langkah1 from "../assets/images/langkah1.png";
import Langkah2 from "../assets/images/langkah2.png";
import Langkah3 from "../assets/images/langkah3.png";
import Langkah4 from "../assets/images/langkah4.png";
import Navbar from "../Component/Navbar"
import Footer from "../Navigation/footer"


function Praktikal() {
  return (
    <>
    <Navbar />
    <div>
        <div className="mt-4 mb-5 container">
        <ImageCard
          imageSrc={BannerTwo}
          title="Ayo terapkan kebiasaan sehat sekarang!"
          txtStyles={txtCardStyles}
          isDescription={false}
          isButtonOpen={true}
          isImageIn={true}
        />
      </div>
      <div className="col-12 col-md-6 px-5">
          <h1>Terapkan Gaya Hidup Sehat dengan alur berikut</h1>
          <p>
            Cara mudah dan praktis yang telah disiapkan untuk kamu memulai
            perjalanan mencapai gaya hidup sehat
          </p>
        </div>
    <div className='px-5 pb-5'>
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
            link={"/tutorial"}
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
            title="Workout Rumahan Untuk Membentuk Badan"
            subtitle="Sebuah langkah awal yang akan membuat hidup kamu menjadi lebih baik"
            link={"/genericTutorial"}
            isButton={true}
            isTutorial={true}
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}


const txtCardStyles = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "white",
};

const contentContainer = {
  justifyContent: "center",
};

export default Praktikal;
