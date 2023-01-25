import React from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import { useContext } from "react";
import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

        <div className="checkout">
          <p>
            Subtotal: ${getTotalCartAmount()}
          </p>
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>

    </div>
  );
};

export default Cart;
