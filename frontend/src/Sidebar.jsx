import React, { useState } from 'react';
import './Sidebar.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Grocery Essentials",
    id: "grocery-essentials",
    sub: [
      "Atta, Sooji, Vermicelli & Flours",
      "Dals & Pulses",
      "Rice & Rice Products",
      "Salt, Sugar & Jaggery",
      "Noodles & Pasta",
    ],
  },
  {
    name: "Dairy & Fresh Foods",
    id: "dairy-fresh",
    sub: ["Milk", "Curd", "Paneer"],
  },
  {
    name: "Oils & Condiments",
    id: "oils-condiments",
    sub: ["Cooking Oil", "Ghee", "Spices"],
  },
  {
    name: "Sweets & Savouries",
    id: "Sweets-Savouries",
    sub: ["Sweets & Chocolates", "Namkeens", "Nuts & Dry Fruits", "Biscuits", "Aroma"],
  },
  {
    name: "Beverages & Frozen Foods",
    id: "Beverages-Frozen",
    sub: ["Beverages and Cool Drinks", "Ice Creams", "Frozen Foods", "Tea & Coffee", "Health drink", "Syrups & Supplement", "Herbals"],
  },
  {
    name: "Health & Personal Care",
    id: "Health-Personal",
    sub: ["Beauty & Personal Care", "Women Wellness", "Men Wellness", "Baby Care", "Oral Care", "Deodorant & Perfumes"],
  },
];

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleToggle = (id) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        {categories.map((category) => (
          <li key={category.id} className="menu-item">
            <div className="menu-title" onClick={() => handleToggle(category.id)}>
              <span>{category.name}</span>
              {activeCategory === category.id ? (
                <FaChevronUp className="arrow" />
              ) : (
                <FaChevronDown className="arrow" />
              )}
            </div>
            {activeCategory === category.id && (
              <ul className="sub-menu">
                {category.sub.map((item, index) => (
                  <li key={index}>
                    {/* Link to the product page for this sub-category */}
                    <Link to={`${category.id}`} className="category-link">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <center>
        <div className="btn-clear">Clear All</div>
      </center>
    </div>
  );
};

export default Sidebar;
