import React from "react";
import { showToast } from "../helpers/showToast";
import { useStore } from "../store";
import "./Modal.css";
import { XCircle } from "phosphor-react";

const Modal = (props) => {
  const deleteCartItem = useStore((state) => state.deleteCartItem);

  const deleteCartItemToast = (id, name) => {
    deleteCartItem(id);
    showToast("success", `${name} successfully deleted!`);
  };

  return (
    <div
      className="modalBackground"
      onClick={() => props.setModalIsOpen(false)}
    >
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalContainerCancel">
          <XCircle
            size={32}
            weight="light"
            onClick={() => props.setModalIsOpen(false)}
          />
        </div>
        <div className="titleModal">
          <h1>Confirmation</h1>
        </div>
        <div className="bodyModal">
          <p>Confirm product deletion from the basket</p>
        </div>
        <div className="footerModal">
          <button onClick={() => deleteCartItemToast(props.id, props.name)}>
            Continue
          </button>
          <button onClick={() => props.setModalIsOpen(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
