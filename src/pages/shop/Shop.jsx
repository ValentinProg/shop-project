import React from "react";
import "./Shop.css";
// import { PRODUCTS } from "../../products";
// import { ShopContext } from "../../context/shop-context";
// import { useContext } from "react";

import { useStore } from '../../store.js';

const Shop = () => {
  // const { addToCart, cartItems } = useContext(ShopContext);
const PRODUCTS = useStore((state) => state.PRODUCTS)
const addToCart = useStore((state) => state.addToCart)
const cartItems = useStore((state) => state.cartItems)

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Your Best Mobile Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <div className="product">
            <img src={product.productImage} />
            <div className="description">
              <p>
                <b>{product.productName}</b>
              </p>
              <p>${product.price}</p>
            </div>
            <button
              className="addToCartBttn"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart {cartItems[product.id] > 0 && <>({cartItems[product.id]})</>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
