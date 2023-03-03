import React from "react";
import "./Shop.css";
import { useStore } from "../../store.js";
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
import { showToast } from "../../helpers/showToast";

const Shop = () => {
  const PRODUCTS = useStore((state) => state.PRODUCTS);
  const addToCart = useStore((state) => state.addToCart);
  const cartItems = useStore((state) => state.cartItems);
  const navigation = useNavigate();

  const addCartItemToast = (id, name) => {
    addToCart(id)
    showToast('success',`${name} successfully added!`)
    // toast.success(`${name} successfully added!`)
  }

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Your Best Mobile Shop</h1>
      </div>
      <div className="products" >
        {PRODUCTS.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.productImage} onClick={() => navigation("/" + product.id)}/>
            <div className="description">
              <p>
                <b>{product.productName}</b>
              </p>
              <p>${product.price}</p>
            </div>
            <button
              className="addToCartBttn"
              onClick={() => addCartItemToast(product?.id, product?.productName)}
            >
              Add to Cart
              {cartItems[product.id] > 0 && <>({cartItems[product.id]})</>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
