import React from "react";
import { useStore } from "../../store.js";
import { Trash } from "phosphor-react";
import { showToast } from "../../helpers/showToast.jsx";

const CartItem = (props) => {
  const cartItems = useStore((state) => state.cartItems);
  const addToCart = useStore((state) => state.addToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateCartItemCount = useStore((state) => state.updateCartItemCount);
  const deleteCartItem = useStore((state) => state.deleteCartItem);


  const deleteCartItemToast = (id, name) => {
    deleteCartItem(id)
    showToast('success',`${name} successfully deleted!`)
  }

  return (
    <div className="cartItem">
      <img src={props.data.productImage} />
      <div className="description">
        <h1>{props.data.productName.toUpperCase()}</h1>
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
      <div className="cleanCartItemLogo">
        {/* <Trash size={32} onClick={() => deleteCartItem(props.data.id)} /> */}
        <Trash size={32} onClick={() => deleteCartItemToast(props.data.id,props.data.productName)} />
      </div>
    </div>
  );
};

export default CartItem;
