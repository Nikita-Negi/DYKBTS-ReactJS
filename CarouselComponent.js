import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

   return (
  	

    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fagr1-1.fna.fbcdn.net/v/t1.0-9/69168499_2969391399742769_4444791796987330560_o.jpg?_nc_cat=107&_nc_sid=cdbe9c&_nc_ht=scontent.fagr1-1.fna&oh=e4b1a5f3ac13495ef46c74d8426f7687&oe=5F35F7A8"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-desc">        	
	        <h3>BTS are worldwide icons</h3>
	        <p>They are korea-born, world famous artist with a humanitarian heart</p>	        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.asiachan.com/BTS.full.176335.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-desc">
          <h3>BTS are recognized artists</h3>
          <p>They are billboard and grammy nominated artists who write and compose their songs</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.alphacoders.com/925/925491.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-desc">
          <h3>They are absolute crackheads</h3>
          <p>They are hilarious and fun to be around</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-z_vH9EopNGs/WkdzqGX1jII/AAAAAAAAAAc/1r1O8J2uMJA4w86jTDTRIefjDGclxXIqgCLcBGAs/s1600/anh-dep-bts-dna.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-desc">
          <h3>BTS are talented individuals</h3>
          <p>They are have impeccable singing and dancing talent</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pm1.narvii.com/7416/33cd090b66ef532580e8c7270c6fbb3b50d3ab59r1-900-600v2_hq.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-desc">
          <h3>They are our Anpanman</h3>
          <p>Just the absolute best human beings that deserve all the love</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}


export default ControlledCarousel;
