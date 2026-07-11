import React from "react";
import "./CategoryGrid.css";
import groceryImg from "/assets/image/Grocery-direy.png";
import dairyImg from "/assets/image/diary.png";
import oilImg from "/assets/image/oil.png";
import sweetsImg from "/assets/image/sweets.png";
import healthImg from "/assets/image/health.png";
import poojaImg from "/assets/image/poja-essentials.png";
import beveragesImg from "/assets/image/bevarges.png";
import stationaryImg from "/assets/image/stationary.png";
import cleaningImg from "/assets/image/cleaning.png";
import { useNavigate } from "react-router-dom";

const categories = [
  { title: "Grocery Essentials", img: groceryImg, path: "/shop/grocery-essentials" },
  { title: "Dairy & Fresh Foods", img: dairyImg, path: "/shop/dairy-fresh" },
  { title: "Oils & Condiments", img: oilImg, path: "/shop/oils-condiments" },
  { title: "Sweets & Savouries", img: sweetsImg, path: "/shop/Sweets-Savouries" },
  { title: "Health & Personalcare", img: healthImg, path: "/shop/Health-Personal" },
  { title: "Pooja Essential", img: poojaImg, path: "/shop/pooja-essentials" },
  { title: "Beverages & Frozen Foods", img: beveragesImg, path: "/shop/Beverages-Frozen" },
  { title: "Stationary & Fancy items", img: stationaryImg, path: "/shop/stationery-fancy" },
  { title: "Cleaning & Household", img: cleaningImg, path: "/shop/cleaning-household" }
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);};
  return (
    <div className="py-5 container-fluid ">
      <div className="row g-4 justify-content-center">
        {categories.map((item, index) => (
          <div className="col-6 col-sm-4 col-md-3 " key={index}>
            <div className="category-box" onClick={() => handleCategoryClick(item.path)}>
              <img src={item.img} alt={item.title} className="category-img" />
              <div className="category-title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
