import React from "react";
import './AnimatedBanner.css';
import Slider from "react-slick";

const AnimatedBanner = () => {
  const settings = {
    dots: true,           // Display navigation dots
    infinite: true,       // Infinite scrolling
    speed: 500,           // Transition speed
    slidesToShow: 1,      // Show one slide at a time
    slidesToScroll: 1,    // Scroll one slide at a time
    autoplay: true,       // Auto-scroll
    autoplaySpeed: 3000,  // Time per slide
    arrows: false,        // Hide left/right arrows
  };

  return (
    <div className="animated-banner">
      <Slider {...settings}>
        <div>
          <img src="banner1.jpg" alt="Banner 1" className="img-fluid w-100" />
          <h2 className="text-overlay">Welcome to Clean Water & Allied Products</h2>
        </div>
        <div>
          <img src="banner2.jpg" alt="Banner 2" className="img-fluid w-100" />
          <h2 className="text-overlay">Delivering High-Quality Packaged Water</h2>
        </div>
        <div>
          <img src="banner3.jpg" alt="Banner 3" className="img-fluid w-100" />
          <h2 className="text-overlay">Pure, Safe, and Refreshing</h2>
        </div>
      </Slider>
    </div>
  );
};

export default AnimatedBanner;
