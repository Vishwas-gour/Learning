import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <div id='slideImg'>   
     <Carousel fade className='bg-light'>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg?t=st=1736674663~exp=1736678263~hmac=1cae27d943974f044fbe8f00435291d1a909ef02712badda860e58e5e5d949e4&w=1060" alt="" />
        <Carousel.Caption>
          <h3 >First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-photo/top-view-accessoires-travel-with-man-clothing-concept-shirt-jean-mobile-phone-wooden-background-watch-sunglasses-shoes-wood-table_1921-79.jpg?t=st=1736674835~exp=1736678435~hmac=1fbf9fec6200e9779b9505d3f2fec8880e47a2390e23661c5a62daa7ed279ab9&w=1060" alt="" />
        <Carousel.Caption>
          <h3 >Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-photo/top-view-assortment-different-traveling-elements_23-2148884966.jpg?t=st=1736674851~exp=1736678451~hmac=8dc5b8f764b1d5b99060f59115ddf7e4fa06f39d98e8ac9450a22dea78ba9812&w=1380" alt="" />
        <Carousel.Caption>
          <h3 >Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

  );
}

export default Home