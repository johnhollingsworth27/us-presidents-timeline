// src/components/Carousel.js

import React from 'react';
import Slider from 'react-slick';
import PresidentCard from './PresidentCard';
import presidents from '../data/presidents';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'; // Create this CSS file for additional styling

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on screen size
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2>Presidents Carousel</h2>
      <Slider {...settings}>
        {presidents.map(president => (
          <div key={president.id} className="slide">
            <PresidentCard president={president} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
