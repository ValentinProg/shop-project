import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import { useStore } from "../store.js";
import logo from "../assets/logo.png";

const Navbar = () => {
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
        <img src={logo} />
        <span>MS</span>
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
