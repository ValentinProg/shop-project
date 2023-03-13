import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import { useStore } from "../store.js";
import logo from "../assets/logo.png";

const Navbar = (props) => {
  const getTotalAmount = useStore((state) => state.getTotalAmount);
  const cartItems = useStore((state) => state.cartItems);
  const totalAmount = useStore((state) => state.totalAmount);

  useEffect(() => {
    getTotalAmount();
  }, [cartItems]);

  return (
    <div className="navbar">
      <Link to="/" className="navbarLogo">
        <span>YB</span>
        <img src={logo} alt='logo'/>
        <span>MS</span>
        <div className="navbarSearch">
          <input
            type="text"
            placeholder="Search . . ."
            onChange={(e) => props.setSearchValue(e.target.value)}
          />
        </div>
      </Link>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <p className="totalAmount">{totalAmount}</p>
      </div>
    </div>
  );
};

export default Navbar;
