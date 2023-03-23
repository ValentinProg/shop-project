import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useStore } from "../../store";
import logo from "../../assets/logo.svg";
import svgCart from "../../assets/shoppingCart.svg";

const Navbar = () => {
  const getTotalAmount = useStore((state) => state.getTotalAmount);
  const cartItems = useStore((state) => state.cartItems);
  const totalAmount = useStore((state) => state.totalAmount);
  const changeSearchValue = useStore((state) => state.changeSearchValue);
  const searchValue = useStore((state) => state.searchValue);

  useEffect(() => {
    getTotalAmount();
  }, [cartItems]);

  const inputValidation = (string) => {
    // const reg = /^[0-9!@#\$%\^\&*\)\(+=._-]+$/g
    const reg =/[^a-zA]/g
    
    return string.replace(reg, '')
  }
  
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbarLogo}>
        <span>YB</span>
        <img src={logo} alt="logo" />
        <span>MS</span>
        <div className={styles.navbarSearch}>
          <input
            value={searchValue}
            type="text"
            maxLength="30"
            placeholder="Search . . ."
            onChange={(e) => changeSearchValue(inputValidation(e.target.value))}
            // onChange={(e) => props.setSearchValue((e.target.value).replace(/[0-9]/g,''))}
          />
        </div>
      </Link>
      <div className={styles.links}>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <img src={svgCart} alt="cart"/>
        </Link>
        <p className={styles.totalAmount}>{totalAmount}</p>
      </div>
    </div>
  );
};

export default Navbar;
