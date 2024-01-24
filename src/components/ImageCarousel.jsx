import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
      <div>
          <img src="https://www.directsportseshop.co.uk/Content/images/banners/big/nb-1080v13.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://www.directsportseshop.co.uk/Content/images/banners/big/asics-gel-kayano-30-running-shoes.jpg" alt="Image 2" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
