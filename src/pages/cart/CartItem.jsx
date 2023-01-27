import React from "react";
// import { ShopContext } from "../../context/shop-context";
// import { useContext } from "react";
import { useStore } from '../../store.js';

const CartItem = (props) => {
  // const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  //   useContext(ShopContext);

  const cartItems = useStore((state) => state.cartItems)
  const addToCart = useStore((state) => state.addToCart)
  const removeFromCart = useStore((state) => state.removeFromCart)
  const updateCartItemCount  = useStore((state) => state.updateCartItemCount )

  return (
    <div className="cartItem">
      <img src={props.data.productImage} />
      <div className="description">
        <p>
          <b>{props.data.productName.toUpperCase()}</b>
        </p>
        <p>${props.data.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(props.data.id)}> - </button>
          <input
            type="text"
            value={cartItems[props.data.id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), props.data.id)}
          />
          <button onClick={() => addToCart(props.data.id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
