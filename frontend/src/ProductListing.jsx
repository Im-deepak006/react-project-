import React from 'react';
import Sidebar from './Sidebar';
import './ProductCard.css';

import it1 from './assets/image/iteam1.jpg';
import it2 from './assets/image/iteam2.jpg';
import it3 from './assets/image/iteam3.png';
import it4 from './assets/image/iteam4.jpg';
import it5 from './assets/image/iteam5.jpg';
import it6 from './assets/image/iteam6.jpg';
import it7 from './assets/image/iteam7.png';
import it8 from './assets/image/iteam8.jpg';
import it9 from './assets/image/iteam9.jpg';
import it10 from './assets/image/iteam10.png';
import it11 from './assets/image/iteam11.jpg';

const products = [
  { name: 'Karamani', price: 18, image: it1, weight: '100g', discount: 10 },
  { name: 'Green Pattani', price: 25, image: it2, weight: '100g' },
  { name: 'Kerala Papadam', price: 39, image: it3, weight: '250g', discount: 3, oldPrice: 40 },
  { name: 'Adukkumalli Idly Rice', weight: '1kg', price: 55, oldPrice: 60, image: it4 },
  { name: 'Moong Dhall', weight: '500g', price: 75, oldPrice: 80, image: it5 },
  { name: 'Moong Dhall', weight: '100g', price: 18, image: it6 },
  { name: 'Gram Dhall', weight: '100g', price: 25, image: it7 },
  { name: 'Vasambu', weight: '100g', price: 18, image: it8 },
  { name: 'Sukku', weight: '100g', price: 25, image: it9 },
  { name: 'Chitharathai', weight: '250g', price: 39, oldPrice: 40, image: it10 },
  { name: 'Athimathuram', weight: '1kg', price: 55, oldPrice: 60, image: it11 },
  { name: 'Thippili', weight: '500g', price: 75, oldPrice: 80, image: it11 },
  { name: 'Kandan Thippili', weight: '100g', price: 18, image: it11 },
  { name: 'Fried Peanut', weight: '100g', price: 25, image: it11 },
  { name: 'Zip Lock Pouch', weight: '250g', price: 39, oldPrice: 40, image: it11 },
  { name: 'Reflect Dishwash', weight: '1kg', price: 55, oldPrice: 60, image: it11 },
  { name: 'Lifebuoy Handwash', weight: '500g', price: 75, oldPrice: 80, image: it11 },
  { name: 'Kerala Papadam', price: 39, image: it3, weight: '250g', discount: 3, oldPrice: 40 },
  { name: 'Adukkumalli Idly Rice', weight: '1kg', price: 55, oldPrice: 60, image: it4 },
  { name: 'Vasambu', weight: '100g', price: 18, image: it8 },
];

const ProductListing = ({ addToCart }) => {
  return (
    <div className="listing-container">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="product-section">
        <h5 className="heading">Showing 1 to 20 of 2784 products</h5>
        <div className="product-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              {p.discount && <span className="discount">{p.discount}% Off</span>}
              <div className="image-box">
                <img src={p.image} alt={p.name} />
              </div>
              <h5>{p.name}</h5>
              <p>{p.weight}</p>
              <p>
                {p.oldPrice ? (
                  <>
                    <del>₹{p.oldPrice}</del>{' '}
                    <span className="price">₹{p.price}</span>
                  </>
                ) : (
                  <span className="price">₹{p.price}</span>
                )}
              </p>
              <button className="cart-btn" onClick={() => addToCart(p)}>
                🛒 Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListing;
