import React from "react";
import { useStore } from "../../store.js";

const CartItem = (props) => {
  const cartItems = useStore((state) => state.cartItems);
  const addToCart = useStore((state) => state.addToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateCartItemCount = useStore((state) => state.updateCartItemCount);
  
  return (
    <div className="cartItem">
      <img src={props.data.productImage} />
      <div className="description">
          <b>{props.data.productName.toUpperCase()}</b>
        <p>${props.data.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(props.data.id)}> - </button>
          <input
            type="text"
            value={cartItems[props.data.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), props.data.id)
            }
          />
          <button onClick={() => addToCart(props.data.id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
