import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./ArtikelScreen.css";
import Navbar from "../Component/Navbar";
import Footer from "../Navigation/footer";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import WatchIcon from "@mui/icons-material/Watch";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";

const ArtikelScreen = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <Navbar />
      <div
        className="container mt-5 rounded-4 overflow-hidden"
        style={{
          width: "100%",
          backgroundImage: `url(assets/image5.png)`,
          backgroundPosition: "55% 45%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="row rounded-5 align-items-center"
          style={{ height: "400px" }}
        >
          <div className="col-12 col-md-12 p-5">
            <div className="row justify-content-center align-items-center">
              <h2 className="text-center pb-2">
                <span className="text-white">Apa itu Gaya Hidup Sehat?</span>
              </h2>
              <p
                className="text-white fsp"
                style={{ width: "500px", textAlign: "center" }}
              >
                Sebuah gaya hidup dimana seseorang dapat menerapkan kebiasaan
                yang dapat memberikan mereka manfaat yang memberikan dampak
                positif pada kualitas kesehatannya.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container mt-5 py-5 rounded-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row">
          <div className="col-12 col-md-6 pt-5 pb-5">
            <div className="col-12 col-md-8">
              <h2 className="mb-3">
                <span>Mengapa Gaya Hidup Sehat Penting?</span>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-5 pb-5">
            <div>
              <p className="col-12 col-md-12 fsp">
                Mengadopsi gaya hidup sehat sangat penting untuk mencegah
                berbagai penyakit, seperti penyakit jantung, diabetes, dan
                kanker. Gaya hidup sehat juga membantu menjaga berat badan
                ideal, meningkatkan suasana hati, dan meningkatkan kualitas
                tidur. Selain itu, kebiasaan sehat meningkatkan energi dan
                produktivitas, serta memperpanjang harapan hidup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 pb-5">
        <div className="row gap-2">
          <div className="col borderprimary p-4 px-5">
            <h4 className="mb-4">
              <span>
                Kapan saatnya bagi kita untuk memulai Gaya Hidup Sehat?
              </span>
            </h4>
            <p className="fsp">
              Waktu terbaik untuk memulai gaya hidup sehat adalah sekarang.
              Tidak pernah ada kata terlambat untuk membuat perubahan positif.
              Semakin cepat memulai, semakin cepat pula manfaat yang dirasakan.
              Membuat perubahan kecil namun konsisten setiap hari, seperti
              memilih makanan yang lebih sehat atau meningkatkan aktivitas
              fisik, dapat berdampak besar dalam jangka panjang.
            </p>
          </div>
          <div className="col borderprimary p-4 px-5">
            <h4 className="mb-4">
              <span>
                Kapan saatnya bagi kita untuk memulai Gaya Hidup Sehat?
              </span>
            </h4>
            <p className="fsp">
              Waktu terbaik untuk memulai gaya hidup sehat adalah sekarang.
              Tidak pernah ada kata terlambat untuk membuat perubahan positif.
              Semakin cepat memulai, semakin cepat pula manfaat yang dirasakan.
              Membuat perubahan kecil namun konsisten setiap hari, seperti
              memilih makanan yang lebih sehat atau meningkatkan aktivitas
              fisik, dapat berdampak besar dalam jangka panjang.
            </p>
          </div>
        </div>
      </div>

      <div className="my-5 py-5" data-aos="fade-up" data-aos-duration="1000">
        <div
          className="rounded-4 container"
          style={{
            height: "400px",
            backgroundImage: `url(assets/image4.png)`,
            backgroundPosition: "55% 85%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mt-2 rounded-4 overflow-hidden animate__animated animate__fadeInUp">
          <h2 className="mt-4 mb-2">
            <span>Contoh - contoh kebiasaan Gaya Hidup Sehat</span>
          </h2>
          <div className="row mt-2 gap-5">
            <div className="col primary-bg p-3">
              <div className="border-bottom mb-3">
                <h5>Menetapkan Batas Waktu Layar</h5>
                <p>
                  Gunakan fitur pengingat waktu pada smartphone untuk membatasi
                  penggunaan aplikasi media sosial dan game.
                </p>
              </div>
              <div className="border-bottom mb-3">
                <h5>Memanfaatkan teknologi untuk kebutuhan positif</h5>
                <p>
                  Tidur dengan minimal 7-8 jam setiap malam untuk mendukung
                  fungsi tubuh dan pikiran yang optimal.
                </p>
              </div>
              <div className="border-bottom">
                <h5>Menjaga tata krama sesama pengguna sosial media</h5>
                <p>
                  Tidur dengan minimal 7-8 jam setiap malam untuk mendukung
                  fungsi tubuh dan pikiran yang optimal.
                </p>
              </div>
            </div>
            <div className="col primary-bg p-3">
              <div className="border-bottom mb-3">
                <h5>Menetapkan Batas Waktu Layar</h5>
                <p>
                  Gunakan fitur pengingat waktu pada smartphone untuk membatasi
                  penggunaan aplikasi media sosial dan game.
                </p>
              </div>
              <div className="border-bottom mb-3">
                <h5>Memanfaatkan teknologi untuk kebutuhan positif</h5>
                <p>
                  Tidur dengan minimal 7-8 jam setiap malam untuk mendukung
                  fungsi tubuh dan pikiran yang optimal.
                </p>
              </div>
              <div className="border-bottom">
                <h5>Menjaga tata krama sesama pengguna sosial media</h5>
                <p>
                  Tidur dengan minimal 7-8 jam setiap malam untuk mendukung
                  fungsi tubuh dan pikiran yang optimal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container my-5 py-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h4 className="mb-5">
          <span>Langkah memanfaatkan Teknologi untuk Gaya Hidup Sehat</span>
        </h4>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="ccontrast px-5 py-5 rounded-4">
              <ChecklistRtlIcon
                sx={{ fontSize: 64 }}
                className="mb-3 border border-2 rounded-5 p-2"
              />
              <h4>1. Menentukan kebutuhan kesehatan</h4>
              <p className="fsp">
                Seperti kebutuhan gizi perhari, olahraga perminggu, dan pola
                tidur yang baik sesuai goals kedepannya.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="ccontrast px-5 py-5 rounded-4">
              <WatchIcon
                sx={{ fontSize: 64 }}
                className="mb-3 border border-2 rounded-5 p-2"
              />
              <h4>2. Menggunakan Apps untuk melacak kesehatan</h4>
              <p className="fsp">
                Adanya apps pelacak kesehatan membantu untuk memantau aktivitas
                fisik, asupan kalori, dan kualitas tidur.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="ccontrast px-5 py-5 rounded-4">
              <AppShortcutOutlinedIcon
                sx={{ fontSize: 64 }}
                className="mb-3 border border-2 rounded-5 p-2"
              />
              <h4>3. Menggunakan Wearable Devices</h4>
              <p className="fsp">
                Untuk memantau tanda-tanda vital seperti detak jantung, tingkat
                oksigen darah, dan pola tidur
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container my-5 p-5 clight rounded-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h4 className="mb-3">
          <span>Aksi</span>
        </h4>
        <div className="row">
          <a
            href="https://www.google.com"
            className="col-12 col-lg-3 text-decoration-none align-items-center"
          >
            <div className="border px-3 py-3 rounded-3 d-flex text-black">
              <ThumbUpOutlinedIcon sx={{ fontSize: 32 }} className="mx-2" />
              <h5 className="ps-2 pt-1">Suka</h5>
            </div>
          </a>
          <a
            href="https://www.google.com"
            className="col-12 col-lg-3 text-decoration-none align-items-center"
          >
            <div className="border px-3 py-3 rounded-3 d-flex text-black">
              <BookmarkBorderOutlinedIcon
                sx={{ fontSize: 32 }}
                className="mx-2"
              />
              <h5 className="ps-2 pt-1">Simpan</h5>
            </div>
          </a>
          <a
            href="https://www.google.com"
            className="col-12 col-lg-3 text-decoration-none align-items-center"
          >
            <div className="border px-3 py-3 rounded-3 d-flex text-black">
              <CheckBoxOutlinedIcon sx={{ fontSize: 32 }} className="mx-2" />
              <h5 className="ps-2 pt-1">Tandai Dibaca</h5>
            </div>
          </a>
          <a
            href="https://www.google.com"
            className="col-12 col-lg-3 text-decoration-none align-items-center"
          >
            <div className="border px-3 py-3 rounded-3 d-flex text-black">
              <TextSnippetOutlinedIcon sx={{ fontSize: 32 }} className="mx-2" />
              <h5 className="ps-2 pt-1">Catatan</h5>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ArtikelScreen;
