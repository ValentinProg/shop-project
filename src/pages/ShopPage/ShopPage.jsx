import React from "react";
import styles from "./ShopPage.module.scss";
import { useStore } from "../../store.js";
import { showToast } from "../../helpers/showToast";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

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
    <div className={styles.shop}>
      <div className={styles.shopTitle}>
        <h1>Your Best Mobile Shop</h1>
      </div>
      <div className={styles.products}>
        {productsFilter.map((product) => (
          <div className={styles.product} key={product.id}>
            <Link to={"/" + product.id}>
              <img src={product.productImage} />
            </Link>
            <div className={styles.description}>
              <p className={styles.descriptionName}>{product.productName}</p>
              <p>${product.price}</p>
            </div>
            <Button
              onClick={() =>
                addCartItemToast(product?.id, product?.productName)
              }
            >
             <span>Add to Cart</span>
              {cartItems[product.id] > 0 && <>({cartItems[product.id]})</>}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
