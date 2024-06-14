import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { ImArrowUpRight2 } from "react-icons/im";

const SimpleSlider = () => {
const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };

  const slides = [
    {
        src: require('../assets/images/artikel1.png'),
        title: 'Kebiasaan Olahraga yang Mudah dipraktekan',
        link: '/image1'
    },
    {
        src: require('../assets/images/artikel2.png'),
        title: 'BMI yang ideal berdasarkan aktivitas harian',
        link: '/image2'
    },
    {
        src: require('../assets/images/artikel3.jpeg'),
        title: 'Hidup Sehat dengan menghemat budget',
        link: '/image3'
    },
    {
        src: require('../assets/images/artikel1.png'),
        title: 'Peran Teknologi Dalam Gaya Hidup Sehat',
        link: '/image1'
    },
    {
        src: require('../assets/images/artikel2.png'),
        title: 'Peran Teknologi Dalam Gaya Hidup Sehat',
        link: '/image2'
    },
  ];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const redirectToPage = () => {
    navigate(slides[index].link);
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div onSelect={handleSelect} key={index} style={sliderStyle}>
            <div style={openButtonContainer}>
                 <button className="btn btn-light btn-lg d-flex align-items-center" style={openButtonStyle} onClick={redirectToPage}>Buka<div style={circleStyle}><ImArrowUpRight2 /></div></button>
                </div>
          <img style={slideImage} src={slide.src} alt={`Slide ${index + 1}`} />
          <div style={sliderTitle} className="slide-title">{slide.title}</div>
        </div>
      ))}
    </Slider>
  );
};

const sliderStyle = {
    position: 'relative',
    textAlign: 'center',
  };
  
const slideImage = {
    width: '608px',
    height: '607.16px',
    borderRadius: '20px'
  };
  
const sliderTitle = {
    // position: 'absolute',
    bottom: '20px',
    color: 'black',
    fontSize: '38px',
    fontWeight: '400px',
    padding: '10px 20px',
    borderRadius: '5px'
  };
 
  const openButtonContainer = {
    position: 'absolute', 
    top: '5%',
    paddingLeft: '14%'
};
  
const openButtonStyle = {
    borderRadius: '30px',
    backgroundColor: 'white'
};

const circleStyle = {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    border: '1px solid', 
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px'
  };

export default SimpleSlider;
