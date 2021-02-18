import React , {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/slider/slider-1.jpg';
import img2 from '../img/slider/slider-2.jpg';
import img3 from '../img/slider/slider-3.jpg';

const slider = () => {
    return (
        <div className="slider">
            <div className="sliderContainer">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
       className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
        className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
</div>
        </div>
    );
}

export default slider;
