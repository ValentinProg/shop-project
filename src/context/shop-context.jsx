import React from "react";
import { createContext } from "react";
import { PRODUCTS } from "../products";
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCatrItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCatrItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCatrItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const contextValue = {cartItems, addToCart, removeFromCart}


  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
