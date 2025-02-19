import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageSlider.css';

const ImageSlider = () => {
  const slides = [
    { src: 'https://rukminim2.flixcart.com/image/850/1000/kgsb1jk0-0/poster/n/h/y/medium-twfnp2-beautiful-waterfall-nature-view-large-size-high-original-imafwy37qv2b5g3v.jpeg?q=90&crop=false', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Nam auctor', button: 'Learn More' },
    { src: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Nam auctor', button: 'Discover' },
    { src: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Nam auctor', button: 'Explore' },
    { src: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Nam auctor', button: 'Get Started' }
  ];

  return (
    <div>
        {/* <h1 className="text-start mb-3">Top navbar</h1> */}
    <Carousel controls={false} indicators={false} className="custom-carousel">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 custom-image" src={slide.src} alt={`Slide ${index + 1}`} />
          <Carousel.Caption>
            <h3 className='text-start'>{slide.text}</h3>
            <button className="btn btn-primary">{slide.button}</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  );
};

export default ImageSlider;
