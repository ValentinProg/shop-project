import { useStore } from "../../store";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ShopItem.css";

const ShopItem = () => {
  const { id } = useParams();
  const PRODUCTS = useStore((state) => state.PRODUCTS);
  const addToCart = useStore((state) => state.addToCart);
  const product = PRODUCTS[id - 1];

  return (
    <div className="ShopItem">
      <p className="ShopItemTitle">
        Mobile phone: {product.productName.toUpperCase()}/{product.model}/
        {product.color}
      </p>
      <div className="ShopItemInfo">
        <img src={product.productImage} />
        <div className="ShopItemTehInfo">
          <p> Price: ${product.price}</p>
          <p> Color: {product.color}</p>
          <p> Brand: {product.productName.toUpperCase()} </p>
          <p> Model: {product.model} </p>
          <p> Display: {product.display} </p>
          <p> Camera: {product.camera} </p>
          <p> Memory: {product.memory} Gb </p>
          <Link to="/cart">
            <button
              className="addToCartBttn"
              onClick={() => addToCart(product.id)}
            >
              Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
