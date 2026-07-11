import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './ProductCard.css';
import { useParams } from 'react-router-dom';

const ProductListing = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Fetch from backend with optional category filtering
    const url = categoryId 
      ? `http://localhost:5000/products?category=${categoryId}`
      : 'http://localhost:5000/products';

    axios.get(url)
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, [categoryId]);

  return (
    <div className="listing-container">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="product-section">
        <h5 className="heading">Showing {products.length} products</h5>
        <div className="product-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              {p.discount && <span className="discount">{p.discount}% Off</span>}
              <div className="image-box">
                <img
                  src={p.image}
                  alt={p.name}
                />
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
