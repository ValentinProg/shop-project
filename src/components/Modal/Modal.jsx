import React from "react";
import { showToast } from "../../helpers/showToast";
import { useStore } from "../../store";
import styles from "./Modal.module.scss";
import xCircle from "../../assets/xcircle.svg";
import Button from "../Button/Button";

const Modal = (props) => {
  const deleteCartItem = useStore((state) => state.deleteCartItem);

  const deleteCartItemToast = (id, name) => {
    deleteCartItem(id);
    showToast("success", `${name} successfully deleted!`);
  };

  return (
    <div
      className={styles.modalBackground}
      onClick={() => props.setModalIsOpen(false)}
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalContainerCancel}>
          <button onClick={() => props.setModalIsOpen(false)}>
            <img src={xCircle} alt="xcircle" />
          </button>
        </div>
        <div className={styles.titleModal}>
          <h1>Confirmation</h1>
        </div>
        <div className={styles.bodyModal}>
          <p>Confirm product deletion from the basket</p>
        </div>
        <div className={styles.footerModal}>
          <Button onClick={() => deleteCartItemToast(props.id, props.name)}>
            Continue
          </Button>
          <Button onClick={() => props.setModalIsOpen(false)}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
