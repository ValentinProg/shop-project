import React, { useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store.js";

const Cart = () => {
  const cartItems = useStore((state) => state.cartItems);
  const PRODUCTS = useStore((state) => state.PRODUCTS);
  const navigate = useNavigate();
  const getTotalSum = useStore((state) => state.getTotalSum);
  const totalAmount = useStore((state) => state.totalAmount);
  const cartItemsSum = useStore((state) => state.cartItemsSum);

  useEffect(() => {
    getTotalSum()
  },[totalAmount])

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
  //       totalAmount += cartItems[item] * itemInfo.price;
  //     }
  //   }
  //   return totalAmount;
  // };
 
  return (
    <div className="cart">
      <div>
        <h1>Your cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product} key={product.id}/>;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${cartItemsSum}</p>
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
