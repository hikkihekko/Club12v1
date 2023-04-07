import React from "react";
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import "./OurProjects.css";

function OurProjects (){

  const { slider, inView} = useInView({
    threshold: 0.1,
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesSpacing: 20,
    centerMode: true,
    centerPadding: '0px',
    speed: 500,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div ref={slider} id="projects" className="slider-container">
      <Slider {...settings} className="slider-container">
        {Array.from({ length: 5 }).map((_, index) => (
            <div className="slider-card" key={index}>
            <img
                src={`./img-slider/${index+1}.png`}
                alt="img"
                className={"slider-img"}
            />
            </div>
        ))}
        </Slider>
    </div>
  );
}

export default OurProjects;

