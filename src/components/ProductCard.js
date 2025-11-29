import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card fade-in">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="quick-view-btn">
            <i className="fas fa-eye"></i>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">₹{product.price}</div>
        
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          <i className="fas fa-shopping-bag"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
