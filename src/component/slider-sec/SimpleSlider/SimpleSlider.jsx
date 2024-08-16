import React from "react";
import Slider from "react-slick";
import Card from "../../cardvertical/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay :true,
    arrows:false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
       <Card />
        </div>
        <div>
       <Card />
        </div>
        <div>
       <Card />
        </div>
        <div>
       <Card />
        </div>
       
      </Slider>
    </div>
  );
}

export default SimpleSlider;
