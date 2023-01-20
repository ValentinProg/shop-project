import React from "react";
import { PRODUCTS } from "../../products";
import "./Shop.css";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

const Shop = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Valentin Shop</h1>
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
