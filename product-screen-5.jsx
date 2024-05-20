import React from "react";
import { Phone } from "./Phone";
import { PropertyFrameWrapper } from "./PropertyFrameWrapper";
import { Repeat } from "./Repeat";
import "./style.css";

export const ProductScreen = () => {
  return (
    <div className="product-screen">
      <div className="div-2">
        <div className="frame-4">
          <div className="frame-5">
            <div className="frame-6">
              <div className="img-wrapper">
                <img className="img" alt="Logo" src="logo-1.png" />
              </div>
              <div className="text-wrapper-3">Lyfe</div>
            </div>
            <img className="vector" alt="Vector" src="vector-1.svg" />
            <div className="frame-6">
              <div className="text-wrapper-4">Your Lifestyle Guidance</div>
            </div>
          </div>
          <div className="frame-7">
            <p className="lyfe-copyright">
              Lyfe 2024 Copyright Reserved.
              <br />
              Free Healthy Lifestyle guidance for everyone
            </p>
            <div className="frame-8">
              <div className="text-wrapper-5">Bussiness Contact</div>
              <div className="phone-wrapper">
                <Phone className="phone-instance" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-9">
          <PropertyFrameWrapper className="component-6" logo="logo-1-2.png" property1="frame-42" />
          <div className="pill">
            <div className="div-wrapper">
              <div className="text-wrapper-6">Pengaturan Akun</div>
            </div>
            <div className="frame-10">
              <div className="frame-11">
                <div className="unsplash-qrwadbcqysc-wrapper">
                  <img className="unsplash-qrwadbcqysc" alt="Unsplash qrwadbcqysc" src="unsplash-qrwadbcqysc.png" />
                </div>
                <div className="frame-12">
                  <div className="text-wrapper-7">Ubah Foto</div>
                  <Repeat className="repeat-instance" />
                </div>
              </div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="text-wrapper-8">Nama</div>
                    <div className="frame-16" />
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-8">Email</div>
                    <div className="frame-16" />
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-8">Password</div>
                    <div className="frame-16" />
                  </div>
                </div>
                <div className="frame-17">
                  <div className="text-wrapper-7">Ubah Informasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
