import React from "react";
import "./ShopPage.css";
import { useStore } from "../../store.js";
import { showToast } from "../../helpers/showToast";
import { Link } from "react-router-dom";

const Shop = () => {
  const PRODUCTS = useStore((state) => state.PRODUCTS);
  const addToCart = useStore((state) => state.addToCart);
  const cartItems = useStore((state) => state.cartItems);
  const searchValue = useStore((state) => state.searchValue);

  const addCartItemToast = (id, name) => {
    addToCart(id);
    showToast("success", `${name} successfully added!`);
  };

  const productsFilter = PRODUCTS.filter((product) => {
    return product.productName
      .toLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Your Best Mobile Shop</h1>
      </div>
      <div className="products">
        {productsFilter.map((product) => (
          <div className="product" key={product.id}>
            <Link to={"/" + product.id}>
              <img src={product.productImage} />
            </Link>
            <div className="description">
              <p className="descriptionName">{product.productName}</p>
              <p>${product.price}</p>
            </div>
            <button
              className="addToCartBttn"
              onClick={() =>
                addCartItemToast(product?.id, product?.productName)
              }
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
