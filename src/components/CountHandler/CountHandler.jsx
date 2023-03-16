import styles from './CountHandler.module.css'
import { useStore } from "../../store";

const CountHandler = (props) => {
    const cartItems = useStore((state) => state.cartItems);
    const addToCart = useStore((state) => state.addToCart);
    const removeFromCart = useStore((state) => state.removeFromCart);
    const updateCartItemCount = useStore((state) => state.updateCartItemCount);


return (
<div className={styles.countHandler}>
<button onClick={() => removeFromCart(props.id)}> - </button>
<input
  type="text"
  value={cartItems[props.id]}
  onChange={(e) =>
    updateCartItemCount(Number(e.target.value), props.id)
  }
/>
<button onClick={() => addToCart(props.id)}> + </button>
</div>)

}


export default CountHandler