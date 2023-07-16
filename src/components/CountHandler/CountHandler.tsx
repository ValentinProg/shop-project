import styles from "./CountHandler.module.scss";
import { useStore } from "../../store";
import Button from "../Button/Button";

const CountHandler = ({ id }: { id: number }) => {
  const cartItems = useStore((state) => state.cartItems);
  const addToCart = useStore((state) => state.addToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateCartItemCount = useStore((state) => state.updateCartItemCount);

  return (
    <div className={styles.countHandler}>
      <Button onClick={() => removeFromCart(id)}> - </Button>
      <input
        type="text"
        value={cartItems[id]}
        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
      />
      <Button onClick={() => addToCart(id)}> + </Button>
    </div>
  );
};

export default CountHandler;
