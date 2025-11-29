import React from 'react';
import { useCart } from '../context/CartContext';
import './CartModal.css';

const CartModal = () => {
  const { cart, updateQuantity, removeFromCart, closeCart, getCartTotal } = useCart();

  const handleCheckout = () => {
    const total = getCartTotal();
    alert(`Redirecting to UPI payment...\nTotal Amount: ₹${total}\n\nUPI ID: loopsandlaurels@upi\n\nPlease complete the payment on your UPI app.`);
    closeCart();
  };

  if (!cart.isCartOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={closeCart}></div>
      <div className="cart-modal">
        <div className="cart-header">
          <h3>Your Shopping Cart</h3>
          <button className="close-btn" onClick={closeCart}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="cart-content">
          {cart.items.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-bag"></i>
              <p>Your cart is empty</p>
              <button className="btn" onClick={closeCart}>Continue Shopping</button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.items.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">₹{item.price}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>₹{getCartTotal()}</span>
                </div>
                <div className="upi-notice">
                  <i className="fas fa-mobile-alt"></i>
                  <span>UPI Payments Only</span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to UPI Payment
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
