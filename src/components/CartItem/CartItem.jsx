import React from "react";
import trash from "../../assets/trash.svg";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./CartItem.css";
import CountHandler from "../CountHandler/CountHandler";

const CartItem = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {modalIsOpen && (
        <Modal
          id={props.data.id}
          name={props.data.productName}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      <div className="cartItem">
        <img src={props.data.productImage} />
        <div className="description">
          <h1>{props.data.productName.toUpperCase()}</h1>
          <p>${props.data.price}</p>
          <CountHandler id={props.data.id} />
        </div>
        <button
          className="cleanCartItemLogo"
          onClick={() => setModalIsOpen(true)}
        >
          <img src={trash} alt="trash" />
        </button>
      </div>
    </>
  );
};

export default CartItem;
