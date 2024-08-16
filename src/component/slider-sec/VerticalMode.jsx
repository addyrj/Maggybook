import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../cardvertical/Card";

function VerticalMode() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay:true,
    speed: 2000,
    autoplaySpeed: 2000,

    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
<Card/>
        </div>
        <div>
<Card/>
        </div>
        <div>
<Card/>
        </div>
        <div>
<Card/>
        </div>
        <div>
<Card/>
        </div>
        <div>
<Card/>
        </div>
      </Slider>
    </div>
  );
}

export default VerticalMode;
