import { showToast } from "../../helpers/showToast";
import { useStore } from "../../store";
import styles from "./Modal.module.scss";
import xCircle from "../../assets/xcircle.svg";
import Button from "../Button/Button";

interface ModalProps {
  productId: number;
  productName: string;
  setModalIsOpen: (b: boolean) => void;
}

const Modal = ({ productId, productName, setModalIsOpen }: ModalProps) => {
  const deleteCartItem = useStore((state) => state.deleteCartItem);

  const deleteCartItemToast = (id: number, name: string) => {
    deleteCartItem(id);
    showToast("success", `${name} successfully deleted!`);
  };

  return (
    <div
      className={styles.modalBackground}
      onClick={() => setModalIsOpen(false)}
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalContainerCancel}>
          <button onClick={() => setModalIsOpen(false)}>
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
          <Button onClick={() => deleteCartItemToast(productId, productName)}>
            Continue
          </Button>
          <Button onClick={() => setModalIsOpen(false)}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
