import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useStore } from "../../store";
import logo from "../../assets/logo.svg";
import svgCart from "../../assets/shoppingCart.svg";

const Navbar = () => {
  const getTotalAmount = useStore((state) => state.getTotalAmount);
  const cartItems = useStore((state) => state.cartItems);
  const totalAmount = useStore((state) => state.totalAmount);

  const changeSearchValue = useStore((state) => state.changeSearchValue);

  useEffect(() => {
    getTotalAmount();
  }, [cartItems]);


  return (
    <div className="navbar">
      <Link to="/" className="navbarLogo">
        <span>YB</span>
        <img src={logo} alt="logo" />
        <span>MS</span>
        <div className="navbarSearch">
          <input
            type="text"
            maxlength="10"
            placeholder="Search . . ."
            onChange={(e) => changeSearchValue(e.target.value)}
            // onChange={(e) => props.setSearchValue((e.target.value).replace(/[0-9]/g,''))}
          />
        </div>
      </Link>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <img src={svgCart} alt="cart"/>
        </Link>
        <p className="totalAmount">{totalAmount}</p>
      </div>
    </div>
  );
};

export default Navbar;
