import React from 'react';
import './GroceryEssentials.css';
import ProductListing from './ProductListing';
import { useParams } from 'react-router-dom';

const categoryNames = {
  'grocery-essentials': 'Grocery Essentials',
  'dairy-fresh': 'Dairy & Fresh Foods',
  'oils-condiments': 'Oils & Condiments',
  'Sweets-Savouries': 'Sweets & Savouries',
  'Beverages-Frozen': 'Beverages & Frozen Foods',
  'Health-Personal': 'Health & Personal Care',
  'cleaning-household': 'Cleaning & Household Essentials',
  'pooja-essentials': 'Pooja Essentials',
  'stationery-fancy': 'Stationery & Fancy Items'
};

const GroceryEssentials = ({ addToCart }) => {
  const { categoryId } = useParams();
  const categoryTitle = categoryNames[categoryId] || 'Products';

  return (
    <>
      <div className="grocery-essentials container-fluid py-3">
        <h3 className="text-center mb-1">{categoryTitle}</h3>
        <p className="text-center text-muted">
          Explore our collection of {categoryTitle}, curated to suit your taste.
        </p>
      </div>

      <ProductListing addToCart={addToCart} />
    </>
  );
};

export default GroceryEssentials;
