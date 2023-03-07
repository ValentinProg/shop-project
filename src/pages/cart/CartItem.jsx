import React from "react";
import { useStore } from "../../store.js";
import { Trash } from "phosphor-react";
import Modal from "../../helpers/Modal.jsx";
import { useState } from "react";
// import { showToast } from "../../helpers/showToast.jsx";

const CartItem = (props) => {
  const cartItems = useStore((state) => state.cartItems);
  const addToCart = useStore((state) => state.addToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateCartItemCount = useStore((state) => state.updateCartItemCount);
  // const deleteCartItem = useStore((state) => state.deleteCartItem);
  // const changeModalState = useStore((state) => state.changeModalState);
  

  // const deleteCartItemToast = (id, name) => {
  //   deleteCartItem(id)
  //   showToast('success',`${name} successfully deleted!`)
  //   changeModalState()
  // }
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
  <>
    {modalIsOpen && <Modal id={props.data.id} name={props.data.productName} setModalIsOpen={setModalIsOpen}/>}
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
        {/* <Trash size={32} onClick={() => deleteCartItemToast(props.data.id,props.data.productName)} /> */}
        <Trash size={32} onClick={() => setModalIsOpen(true)}/>
      </div>
    </div>
    </>
  );
};

export default CartItem;
