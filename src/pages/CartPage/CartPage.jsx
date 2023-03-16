import React, { useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./CartPage.css";
import { Link } from "react-router-dom";
import { useStore } from "../../store.js";

const Cart = () => {
  const cartItems = useStore((state) => state.cartItems);
  const PRODUCTS = useStore((state) => state.PRODUCTS);
  const getTotalSum = useStore((state) => state.getTotalSum);
  const totalAmount = useStore((state) => state.totalAmount);
  const cartItemsSum = useStore((state) => state.cartItemsSum);

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
    <div className="cart">
      {totalAmount > 0 ? (
        <>
          <h1>Your cart Items</h1>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] > 0) {
              return <CartItem data={product} key={product.id} />;
            }
          })}
          <div className="checkout">
            <h1>Subtotal: ${cartItemsSum}</h1>
            <Link to="/">
              <button>Continue Shopping</button>
            </Link>
            <button>Checkout</button>
          </div>
        </>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
