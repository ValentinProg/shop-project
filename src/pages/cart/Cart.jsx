import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store.js";
import Modal from "../../helpers/Modal";

const Cart = () => {
  const cartItems = useStore((state) => state.cartItems);
  const PRODUCTS = useStore((state) => state.PRODUCTS);
  const navigate = useNavigate();
  const getTotalSum = useStore((state) => state.getTotalSum);
  const totalAmount = useStore((state) => state.totalAmount);
  const cartItemsSum = useStore((state) => state.cartItemsSum);
  // const modalState = useStore((state) => state.modalState);

  useEffect(() => {
    getTotalSum();
  }, [totalAmount]);

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
    <>
      {/* {modalState && <Modal changeModalState={setModalState}/>} */}
      <div className="cart">
        {totalAmount > 0 && <h1>Your cart Items :</h1>}
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <CartItem
                  data={product}
                  key={product.id}
                
                />
              );
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout">
            <h1>Subtotal: ${cartItemsSum}</h1>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
