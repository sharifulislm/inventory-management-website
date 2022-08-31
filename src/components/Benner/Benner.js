import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Benner.css';

const Benner = () => {
    return (
        <div className='benner-box mb-5 d-flex align-items-center'>

         <div className='w-50 benner-content  mx-auto '>
<h1 className='text-light fs-1 text-center'>
NEW TECHNOLOGY<br></br> AND BUILD </h1>

<h6 className='text-light text-center'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</h6>
<button type="button" className="btn   btn-secondary m-auto d-flex justify-content-center mt-4 ">Get Started </button>
         </div>
            {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 carosel-box"
      src="https://vdalph.com/wp-content/uploads/2021/05/vdalph-1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carosel-box"
      src="https://vdalph.com/wp-content/uploads/2021/05/Laptop-Chip-Level-Repaira.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carosel-box"
      src="https://amigos-themes.com/profix/assets/images/service/motherboard-4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
        </div>
    );
};

export default Benner;