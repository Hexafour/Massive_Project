import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './ArtikelScreen.css';
import 'material-icons/iconfont/material-icons.css';

import image1 from '../assets/images/image1.png';  
import image2 from '../assets/images/image2.png';  
import image3 from '../assets/images/image3.png';  
import image4 from '../assets/images/image4.png';  

const ArtikelScreen = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <div className="container mt-5 rounded-4 overflow-hidden">
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <div className="col-12 col-md-8">
              <h2 className="mb-3">
                <span>Peran Teknologi Dalam Gaya Hidup Sehat</span>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-6 p-5">
            <div>
              <h4 className="mb-3">
                <span>Memperburuk atau Sebaliknya?</span>
              </h4>
              <p className="col-12 col-md-12">
                Apabila teknologi tidak digunakan dengan bijak, kamu tidak akan bisa mendapatkan kualitas hidup terbaik. Lorem ipsum dolor sit amet Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 rounded-4 overflow-hidden bg-image" data-aos="fade-up" data-aos-duration="1000">
        <div className="row rounded-5">
          <div className="col-12 col-md-7 p-5">
            <div>
              <h4 className="mb-3 ps-5 pt-5">
                <span className="text-white">Teknologi Dapat Menjadi Pedang Bermata Dua</span>
              </h4>
              <p className="col-12 col-md-10 text-white ps-5 pb-4">
                Karena apabila digunakan dengan baik, teknologi dapat menjadi penunjang yang mempermudah anda menerapkan kebiasaan baik dalam mencapai kehidupan yang lebih baik.
                <br />
                <br />
                Namun, disisi lain apabila teknologi tidak digunakan dengan bijak, teknologi justru akan menjadi tantangan dan musuh terbesar kamu dan masyarakat untuk mencapai kehidupan yang lebih baik
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 rounded-4 clight mb-5" data-aos="fade-up" data-aos-duration="1000">
        <div className="row">
          <div className="col-12 col-md-6 pt-5 pb-5">
            <h4 className="mb-3 ps-5 pt-5">
              <span>Memanfaatkan keberadaan Teknologi untuk mencapai Gaya Hidup Sehat</span>
            </h4>
            <p className="col-12 col-md-10 ps-5 pb-4">
              Teknologi kini memainkan peran penting dalam mendukung gaya hidup sehat.
              <br />
              <br />
              Aplikasi kebugaran dan pelacak aktivitas membantu memonitor kesehatan dan kebugaran harian.
              <br />
              <br />
              Gadget seperti smartwatch dapat mengingatkan kita untuk tetap aktif dan memantau detak jantung. Selain itu, layanan telemedicine memungkinkan konsultasi medis tanpa harus keluar rumah. Dengan teknologi ini, menjaga kesehatan menjadi lebih mudah dan efisien.
            </p>
          </div>
          <div className="col-12 col-md-6 pt-5 pb-5 pe-5">
            <div className="overflow-hidden rounded-3 " style={{width: '100%', height: '100%', backgroundImage: `url(${image2})`, backgroundPosition: '55% 25%' }}></div>
          </div>
        </div>
      </div>

      <div className="container mt-5 rounded-4 clight mb-5" data-aos="fade-up" data-aos-duration="1000">
        <div className="row">
          <div className="col-12 col-md-6 pt-5 pb-5 ps-5">
            <div className="overflow-hidden rounded-3 " style={{width: '100%', height: '100%', backgroundImage: `url(${image3})`, backgroundPosition: '55% 25%' }}></div>
          </div>
          <div className="col-12 col-md-6 pt-5 pb-5">
            <h4 className="mb-3 ps-5 pt-5">
              <span>Memanfaatkan keberadaan Teknologi untuk mencapai Gaya Hidup Sehat</span>
            </h4>
            <p className="col-12 col-md-10 ps-5 pb-4">
              Teknologi kini memainkan peran penting dalam mendukung gaya hidup sehat.
              <br />
              <br />
              Aplikasi kebugaran dan pelacak aktivitas membantu memonitor kesehatan dan kebugaran harian.
              <br />
              <br />
              Gadget seperti smartwatch dapat mengingatkan kita untuk tetap aktif dan memantau detak jantung. Selain itu, layanan telemedicine memungkinkan konsultasi medis tanpa harus keluar rumah. Dengan teknologi ini, menjaga kesehatan menjadi lebih mudah dan efisien.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="rounded-3 container" style={{height: '400px', backgroundImage: `url(${image4})`, backgroundPosition: '55% 85%', backgroundRepeat: 'no-repeat' }}></div>
        <div className="container mt-2 rounded-4 overflow-hidden animate__animated animate__fadeInUp">
          <div className="row">
            <div className="col-12 col-md-6 p-3">
              <div className="col-12 col-md-8">
                <h2 className="mb-3">
                  <span>Contoh sederhana dalam penggunaan teknologi dengan bijak</span>
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 primary-bg p-3">
              <div className="border-bottom mb-3">
                <h5>Menetapkan Batas Waktu Layar</h5>
                <p>Gunakan fitur pengingat waktu pada smartphone untuk membatasi penggunaan aplikasi media sosial dan game.</p>
              </div>
              <div className="border-bottom mb-3">
                <h5>Memanfaatkan teknologi untuk kebutuhan positif</h5>
                <p>Tidur dengan minimal 7-8 jam setiap malam untuk mendukung fungsi tubuh dan pikiran yang optimal.</p>
              </div>
              <div className="border-bottom">
                <h5>Menjaga tata krama sesama pengguna sosial media</h5>
                <p>Tidur dengan minimal 7-8 jam setiap malam untuk mendukung fungsi tubuh dan pikiran yang optimal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5" data-aos="fade-up" data-aos-duration="1000">
        <h4 className="mb-5">
          <span>Langkah memanfaatkan Teknologi untuk Gaya Hidup Sehat</span>
        </h4>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="ccontrast px-5 py-5 rounded-4">
              <span className="material-symbols-outlined">deployed_code</span>
              <h5>Membuat Rencana</h5>
              <p>A website to find local traditional culinary with detailed informations and other informations here.</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="ccontrast px-5 py-5 rounded-4">
              <span className="material-symbols-outlined">deployed_code</span>
              <h5>Membuat Rencana</h5>
              <p>A website to find local traditional culinary with detailed informations and other informations here.</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="ccontrast px-5 py-5 rounded-4">
              <span className="material-symbols-outlined">deployed_code</span>
              <h5>Membuat Rencana</h5>
              <p>A website to find local traditional culinary with detailed informations and other informations here.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 p-5 clight rounded-4" data-aos="fade-up" data-aos-duration="1000">
        <h4 className="mb-3">
          <span>Aksi</span>
        </h4>
        <div className="row">
          <a href="https://www.google.com" className="col-12 col-lg-3">
            <div className="border px-3 py-3 rounded-3 d-flex">
              <span className="material-symbols-outlined">deployed_code</span>
              <h5 className="ps-2">Suka</h5>
            </div>
          </a>
          <a href="https://www.google.com" className="col-12 col-lg-3">
            <div className="border px-3 py-3 rounded-3 d-flex">
              <span className="material-symbols-outlined">deployed_code</span>
              <h5 className="ps-2">Simpan</h5>
            </div>
          </a>
          <a href="https://www.google.com" className="col-12 col-lg-3">
            <div className="border px-3 py-3 rounded-3 d-flex">
              <span className="material-symbols-outlined">deployed_code</span>
              <h5 className="ps-2">Tandai dibaca</h5>
            </div>
          </a>
          <a href="https://www.google.com" className="col-12 col-lg-3">
            <div className="border px-3 py-3 rounded-3 d-flex">
              <span className="material-symbols-outlined">deployed_code</span>
              <h5 className="ps-2">Catatanku</h5>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ArtikelScreen;