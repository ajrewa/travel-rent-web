import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartPage.css';
import bin_icon  from "../Assets/bin_icon.png"

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.images[0]} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <img src={bin_icon} onClick={() => removeFromCart(index)} />
            </div>
          </div>
        ))
      ) : (
        <p>Kuch Khareed To Phle Bhai</p>
      )}
    </div>
  );
};

export default CartPage;
