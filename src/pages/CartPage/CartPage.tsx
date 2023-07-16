import { useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./CartPage.module.scss";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import Button from "../../components/Button/Button";

const Cart = () => {
  const cartItems = useStore((state) => state.cartItems);
  const PRODUCTS = useStore((state) => state.PRODUCTS);
  const getTotalSum = useStore((state) => state.getTotalSum);
  const totalAmount = useStore((state) => state.totalAmount);
  const cartItemsSum = useStore((state) => state.cartItemsSum);

  useEffect(() => {
    getTotalSum();
  }, [totalAmount, getTotalSum]);

  return (
    <div className={styles.cart}>
      {totalAmount > 0 ? (
        <>
          <h1>Your cart Items</h1>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] > 0) {
              return <CartItem data={product} key={product.id} />;
            }
          })}
          <div className={styles.checkout}>
            <h1>Subtotal: ${cartItemsSum}</h1>
            <Link to="/">
              <Button>Continue Shopping</Button>
            </Link>
            <Button>Checkout</Button>
          </div>
        </>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
