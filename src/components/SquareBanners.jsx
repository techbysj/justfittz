import React from 'react';

const SquareBanners = () => {
  return (
    <div className="square-banners-container">
      <div className="square-banner">
        <img src="https://justfittz.com/wp-content/uploads/2020/11/Own_the_Run_3-Stripes_PB_Singlet_Black_FP7540_21_model.jpg" alt="Banner 1" />
        <div className="banner-overlay">
          <h2>Own the Run</h2>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="square-banner">
        <img src="https://justfittz.com/wp-content/uploads/2020/11/kids-jf.jpg" alt="Banner 2" />
        <div className="banner-overlay">
          <h2>Kids Collection</h2>
          <button>Explore</button>
        </div>
      </div>

      <div className="square-banner">
        <img src="https://justfittz.com/wp-content/uploads/2020/11/Workout_Ready_ACTIVCHILL_T-Shirt_Black_FT0968_01_standard.jpg" alt="Banner 3" />
        <div className="banner-overlay">
          <h2>Workout Ready</h2>
          <button>Discover</button>
        </div>
      </div>
    </div>
  );
};

export default SquareBanners;
