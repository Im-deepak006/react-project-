// PromoSlider.jsx
import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "./promoCarousel.css";

import img1 from "./assets/image/promo-banner1.png";
import img2 from "./assets/image/promo-banner3.png";
import img3 from "./assets/image/promo-banner2.png";
import img4 from "./assets/image/promo-banner4.png";

const promoImages = [
  { img: img1, alt: "Sports and Gym" },
  { img: img2, alt: "Technical Clubs" },
  { img: img3, alt: "Cultural Clubs" },
  { img: img4, alt: "Professional Memberships" },
];

const PromoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,               // ✅ autoplay enabled
    autoplaySpeed: 2000,          
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box className="campus-wrapper">
      <Slider {...settings}>
        {promoImages.map((item, index) => (
          <Box className="process-box" key={index}>
            <div className="process-box_img">
              <img src={item.img} alt={item.alt} />
            </div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default PromoSlider;
