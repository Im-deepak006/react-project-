import React from "react";
import Banner from "./Banner.jsx";
import CategoryGrid from "./CategoryGrid.jsx";
import PromoCarousel from "./PromoCarousel.jsx";
import ProductListing from "./ProductListing.jsx";

const HomePage = ({ addToCart }) => {
  return (
    <>
      <Banner />
      <CategoryGrid />
      <PromoCarousel />
      <ProductListing addToCart={addToCart} />
    </>
  );
};

export default HomePage;
