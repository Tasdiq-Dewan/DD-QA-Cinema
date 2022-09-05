import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slide.css'


function Slide() {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.hdqwalls.com/wallpapers/the-dark-knight-aftermath-4k-yk.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <button className='booking-btn'>See Bookings Now!</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fhiddenremote.com%2Ffiles%2F2018%2F12%2F3479686-3460642-dragonballsuperbroly.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <button className='booking-btn'>See Bookings Now!</button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images2.alphacoders.com/674/674470.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <button className='booking-btn'>See Bookings Now!</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="https://movies.universalpictures.com/media/03-nope-dm-mobile-banner-1080x745-rr-f01-060622-629fb9c03b34e-1.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <button className='booking-btn'>See Bookings Now!</button>
        </Carousel.Caption>
      </Carousel.Item>

    

    </Carousel>
  );
}

export default Slide;