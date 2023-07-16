import { useStore } from "../../store";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./ShopItem.module.scss";
import Button from "../Button/Button";

const ShopItem = () => {
  const { id } = useParams();
  const PRODUCTS = useStore((state) => state.PRODUCTS);
  const addToCart = useStore((state) => state.addToCart);
  const product = PRODUCTS[id];

  return (
    <div className={styles.ShopItem}>
      <p className={styles.ShopItemTitle}>
        Mobile phone: {product.productName.toUpperCase()}/{product.model}/
        {product.color}
      </p>
      <div className={styles.ShopItemInfo}>
        <img src={product.productImage} alt={product.productName} />
        <div className={styles.ShopItemTehInfo}>
          <p> Price: ${product.price}</p>
          <p> Color: {product.color}</p>
          <p> Brand: {product.productName.toUpperCase()} </p>
          <p> Model: {product.model} </p>
          <p> Display: {product.display} </p>
          <p> Camera: {product.camera} </p>
          <p> Memory: {product.memory} Gb </p>
          <Link to="/cart">
            <Button
              // className={styles.addToCartBttn}
              onClick={() => addToCart(product.id)}
            >
              Buy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
