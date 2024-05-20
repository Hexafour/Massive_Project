import React from "react";
import { Heart } from "./Heart";
import { Phone } from "./Phone";
import { PropertyFrameWrapper } from "./PropertyFrameWrapper";
import "./style-2.css";

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
          <PropertyFrameWrapper className="component-6" logo="logo-1-3.png" property1="frame-42" />
          <div className="frame-10">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <img className="unsplash-qrwadbcqysc" alt="Unsplash qrwadbcqysc" src="unsplash-qrwadbcqysc.png" />
                <div className="div-wrapper">
                  <p className="p">Temukan Produk Penunjang Gaya Hidup yang kamu butuhkan disini</p>
                </div>
              </div>
            </div>
            <div className="frame-11">
              <div className="pill">
                <div className="frame-12">
                  <div className="text-wrapper-6">Filter</div>
                </div>
                <div className="frame-13">
                  <div className="frame-14">
                    <div className="text-wrapper-7">Gadget</div>
                  </div>
                  <div className="frame-14">
                    <div className="text-wrapper-8">Perlengkapan Olahraga</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-7">Makanan Sehat</div>
                  </div>
                  <div className="frame-14">
                    <div className="text-wrapper-7">Aksesoris</div>
                  </div>
                </div>
              </div>
              <div className="frame-16">
                <div className="frame-11">
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="frame-wrapper">
                        <div className="heart-wrapper">
                          <Heart className="heart-instance" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-19">
                      <div className="text-wrapper-9">Oatmeal</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="overlap-group-2">
                        <div className="heart-wrapper">
                          <Heart className="heart-instance" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-19">
                      <div className="text-wrapper-10">Yogurt</div>
                    </div>
                  </div>
                </div>
                <div className="frame-11">
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="overlap-group-3">
                        <div className="heart-wrapper">
                          <Heart className="heart-instance" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-19">
                      <div className="text-wrapper-9">Fruits</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="overlap-group-4">
                        <div className="heart-wrapper">
                          <Heart className="heart-instance" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-19">
                      <div className="text-wrapper-10">Vegetables</div>
                    </div>
                  </div>
                </div>
                <div className="frame-11">
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="overlap-group-5">
                        <div className="heart-wrapper">
                          <Heart className="heart-instance" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-19">
                      <div className="text-wrapper-9">Protein Concentrate</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="overlap-group-6">
                        <div className="heart-wrapper">
                          <Heart className="heart-instance" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-19">
                      <div className="text-wrapper-10">Fish and Seafoods</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
