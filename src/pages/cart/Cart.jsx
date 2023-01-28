import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
// import { PRODUCTS } from "../../products";
// import { ShopContext } from "../../context/shop-context";
// import { useContext } from "react";
import { useStore } from "../../store.js";

const Cart = () => {
  // const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const cartItems = useStore((state) => state.cartItems);
  // const getTotalCartAmount = useStore((state) => state.getTotalCartAmount)
  const PRODUCTS = useStore((state) => state.PRODUCTS);
  const navigate = useNavigate();

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

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
      {getTotalCartAmount() > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${getTotalCartAmount()}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
