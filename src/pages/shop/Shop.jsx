import React from "react";
import { PRODUCTS } from "../../products";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Valentin Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((i) => {
          return (
          <div>
            <h1>{i.productname}</h1>
            <div>{i.productImage}</div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Shop;
