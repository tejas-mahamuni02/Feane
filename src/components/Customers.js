import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
function Customers() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <FaChevronCircleLeft />,
    nextArrow: <FaChevronCircleRight />
  };
  return (
    <div>
      <h1 style={{ fontFamily: "Monotype Corsiva" }}>What Says Our Customers</h1>
      <div className="slider-container">
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>

          <div className='p-4'>
            <div className='bg-dark text-white rounded py-3'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi amet repudiandae, ab blanditiis consequuntur </p>
              <h5>Moana Michell</h5>
              <p>magna Aliqa</p>
            </div>
            <img src="./images/client1.jpg" alt="Moana" className='img-fluid mx-auto d-block rounded-circle border border-warning border-4 w-25 h-25  float-start' />
          </div>
          <div className='p-4'>
            <div className='bg-dark text-white rounded py-3'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi amet repudiandae, ab blanditiis consequuntur </p>
              <h5>Mike Hamel</h5>
              <p>magna Aliqa</p>
            </div>
            <img src="./images/client2.jpg" alt="Moana" className='img-fluid mx-auto d-block rounded-circle border border-warning border-4 w-25 h-25  float-start' />
          </div>
          <div className='p-4'>
            <div className='bg-dark text-white rounded py-3'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi amet repudiandae, ab blanditiis consequuntur </p>
              <h5>Moana Michell</h5>
              <p>magna Aliqa</p>
            </div>
            <img src="./images/client1.jpg" alt="Moana" className='img-fluid mx-auto d-block rounded-circle border border-warning border-4 w-25 h-25  float-start' />
          </div>
          <div className='p-4'>
            <div className='bg-dark text-white rounded py-3'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi amet repudiandae, ab blanditiis consequuntur </p>
              <h5>Mike Hamel</h5>
              <p>magna Aliqa</p>
            </div>
            <img src="./images/client2.jpg" alt="Moana" className='img-fluid mx-auto d-block rounded-circle border border-warning border-4 w-25 h-25  float-start' />
          </div>
        </Slider>
        <FaChevronCircleLeft className='fs-1 text-warning me-4' onClick={previous} />
        <FaChevronCircleRight className='fs-1 text-warning' onClick={next} />
      </div>
    </div>
  )
}

export default Customers
