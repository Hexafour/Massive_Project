import React from 'react';
import tutorial_img from '../assets/images/tutorial_img.png';
import { BsBookmark, BsCheck2Square, BsHandThumbsUp, BsJournals } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Tutorial() {
  return (
    <div>
        <div className='container' style={paddingContent}></div>
        <div className='col-lg-12 px-4'>
        <div style={headerBox}>
            <h1 style={titleTxt}>Membangun pola tidur sehat</h1>
            <div className='row justify-content-center' style={paddingButtonHeader}>
            <div className='col-auto'>
                <button className="btn btn-outline-dark d-flex transparent-button align-items-center justify-content-center" style={btnTopBorderRadius}>Suka<div style={iconStyle}><BsHandThumbsUp /></div></button>
            </div>
            <div className='col-auto'>
                <button className="btn btn-outline-dark d-flex transparent-button align-items-center justify-content-center" style={btnTopBorderRadius}>Simpan<div style={iconStyle}><BsBookmark /></div></button>
            </div>
            <div className='col-auto'>
                <button className="btn btn-outline-dark d-flex transparent-button align-items-center justify-content-center" style={btnTopBorderRadius}>Tandai Selesai<div style={iconStyle}><BsCheck2Square /></div></button>
            </div>
            <div className='col-auto'>
                <button className="btn btn-outline-dark d-flex transparent-button align-items-center justify-content-center" style={btnTopBorderRadius}>Catatan<div style={iconStyle}><BsJournals /></div></button>
            </div>
            </div>
        </div>
        </div>
          <div className='container' style={paddingContent}></div>
        <div className='row'>
          <div className='col-lg-6 px-5'>
            <div style={cyanBox}>
              <div style={paddingContentBox}>
                <h1>Merencanakan</h1>
                <p>Lyfe membantu anda memami Gaya Hidup sehat dengan cara yang simpel dan interaktif. Lyfe  membantu anda memami Gaya Hidup sehat dengan cara yang simpel dan interaktif.</p>
                <div style={paddingLeft}>
                <ul type="disc">
                    <li>Lyfe membantu anda memami Gaya Hidup sehat dengan cara yang simpel dan interaktif.</li>
                    <li>Lyfe membantu anda memami Gaya Hidup sehat dengan cara yang simpel dan interaktif.</li>
                    <li>Lyfe membantu anda memami Gaya Hidup sehat dengan cara yang simpel dan interaktif.</li>
                </ul>
                </div>

                <p>Sumber daya yang akan mempermudah kamu :</p>
                <div style={paddingLeft}>
                  <ul type="disc">
                  <li>Link A</li>
                      <li>Link B</li>
                      <li>Link C</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 px-4'>
          <div style={greyBox}>
            <div style={paddingContentBoxGrey}>
              <img src={tutorial_img} alt="tutorial" style={imgTutorial} />
            </div>
            <div style={paddingContentBox}>
            <h1>Menggunakan teknologi untuk mempermudah penerapan</h1>
                <div style={paddingLeft}>
                    <p>* Lyfe membantu anda memami Gaya Hidup sehat dengan cara yang simpel dan interaktif.</p>
                    <p>* Lyfe membantu anda memami Gaya Hidup sehat dengan cara yang simpel dan interaktif.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={paddingContent}></div>
      <div style={blueBox}>
      <div className='row mt-3' style={paddingBars}>
        <div className="col-lg-12">
          <div className='row'>
            <div className="d-flex justify-content-between align-items-center px-4" style={stepStyle}>
              <button
                className="btn btn-light d-flex align-items-center justify-content-center"
                style={rightBorderRadius}
                // onClick={'#'}
              >
                <AiOutlineLeft />
              </button>
              <div style={barsStyleAktif} />
              <div style={barsStyleDisabled} />
              <div style={barsStyleDisabled} />
              <div style={barsStyleDisabled} />
              <button
                className="btn btn-light d-flex align-items-center justify-content-center"
                style={rightBorderRadius}
                // onClick={'#'}
              >
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='container' style={paddingContent}></div>
      <div>
    </div>
    </div>
  );
}

const headerBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '195px',
    textAlign: 'center',
    backgroundColor: '#E7F2F9',
    borderRadius: '20px'
  };

const btnTopBorderRadius = {
    borderRadius: '8px 8px 0 0',
    width: '284px',
    height: '64px'
  };

const cyanBox = {
    display: 'flex',
    flexDirection: 'column',
    height: '650px',
    backgroundColor: '#DDEBFF',
    borderRadius: '20px',
  };

const greyBox = {
    display: 'flex',
    flexDirection: 'column',
    height: '650px',
    backgroundColor: '#F5F5F5',
    borderRadius: '20px',
  };

const paddingContent = {
    padding: '20px',
  };

const rightBorderRadius = {
  width: '40px',
  height: '40px',
    borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  };

const blueBox = {
    backgroundColor: '#253751',
    borderRadius: '20px',
  };

const titleTxt = {
    color: 'black',
    textAlign: 'center'
}

const paddingContentBox = {
    padding: '50px',
  };

const paddingLeft = {
    paddingLeft: '20px',
    paddingTop: '20px'
  };

const imgTutorial = {
  width: '307.61px',
  height: '266.15px',
}

const paddingContentBoxGrey = {
  alignSelf: 'center',
  paddingTop: '50px'
}

const iconStyle = {
  width: '25px',
  height: '25px',
  alignSelf: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '10px'
};

const paddingButtonHeader = {
  padding: '20px'
};

const paddingBars = {
  padding: '20px'
};

const barsStyleAktif = {
  width: '20%',
  height: '15px',
  backgroundColor: '#3E8CFF',
  borderRadius: '20px'
};

const barsStyleDisabled = {
  width: '20%',
  height: '15px',
  backgroundColor: '#DDEBFF',
  borderRadius: '20px'
};

const stepStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center'
};


export default Tutorial;
