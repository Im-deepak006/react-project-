import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import banner1 from "/assets/image/banner1.png";
import banner2 from "/assets/image/banner2.png";
import banner3 from "/assets/image/banner3.png";
import banner5 from "/assets/image/banner5.png";

const images = [banner1, banner2, banner3, banner5];

const BannerCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <Box sx={{ width: "100%", mt: 2, px: { xs: 1, sm: 2, md: 5 } }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box
            key={idx}
            component="img"
            src={img}
            alt={`Banner ${idx + 1}`}
            sx={{
              width: "100%",
              height: { xs: '20vh', sm: '50vh', md: '70vh',lg:'80vh' },
              objectFit: "fill",
              display: "block",
              borderRadius: 2,
              boxShadow: 2,
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default BannerCarousel;
