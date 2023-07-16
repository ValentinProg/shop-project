import trash from "../../assets/trash.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./CartItem.module.scss";
import CountHandler from "../CountHandler/CountHandler";

interface CartItemProps {
  data: {
    productName: string;
    productImage: string;
    id: number;
    price: number;
  };
}

const CartItem = ({ data }: CartItemProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {modalIsOpen && (
        <Modal
          productId={data.id}
          productName={data.productName}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      <div className={styles.cartItem}>
        <img src={data.productImage} />
        <div className={styles.description}>
          <h1>{data.productName.toUpperCase()}</h1>
          <p>${data.price}</p>

          <CountHandler id={data.id} />
        </div>
        <button
          className={styles.cleanCartItemLogo}
          onClick={() => setModalIsOpen(true)}
        >
          <img src={trash} alt="trash" />
        </button>
      </div>
    </>
  );
};

export default CartItem;
