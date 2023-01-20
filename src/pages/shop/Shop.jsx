import React from "react";
import { PRODUCTS } from "../../products";
import "./Shop.css";

const Shop = () => {
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
