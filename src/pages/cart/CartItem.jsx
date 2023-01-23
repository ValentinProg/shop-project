import React from "react";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

const CartItem = (props) => {
    const { cartItems } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={props.data.productImage} />
      <div className="description">
        <p>
          <b>{props.data.productName}</b>
        </p>
        <p>${props.data.price}</p>
        <div className="countHandler">
             <button> - </button>
             <input type="text" value={cartItems}/>
             <button> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
