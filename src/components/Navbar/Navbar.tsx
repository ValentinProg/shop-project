import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useStore } from "../../store";
import logo from "../../assets/logo.svg";
import svgCart from "../../assets/shoppingCart.svg";
import { useTheme, Theme } from "../../ThemeContext";
import dark from "../../assets/dark.png";
import light from "../../assets/light.png";

const Navbar = () => {
  const getTotalAmount = useStore((state) => state.getTotalAmount);
  const cartItems = useStore((state) => state.cartItems);
  const totalAmount = useStore((state) => state.totalAmount);
  const changeSearchValue = useStore((state) => state.changeSearchValue);
  const searchValue = useStore((state) => state.searchValue);
  // const { toggleTheme, currentTheme } = useTheme();

  const { theme, setTheme } = useTheme();
  console.log(theme);

  useEffect(() => {
    getTotalAmount();
  }, [cartItems]);

  const inputValidation = (inputString: string) => {
    const reg = /[^a-zA]/g;

    return inputString.replace(reg, "");
  };

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
            maxLength={30}
            placeholder="Search . . ."
            onChange={(e) => changeSearchValue(inputValidation(e.target.value))}
          />
        </div>
      </Link>
      <div className={styles.links}>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <img src={svgCart} alt="cart" />
        </Link>
        <p className={styles.totalAmount}>{totalAmount}</p>
        {/* <button onClick={(toggleTheme)}>{currentTheme === 'dark' ? <img src={light} alt="light" /> : <img src={dark} alt="dark" />}</button> */}
        <button
          onClick={() =>
            setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
          }
        >
          {theme === Theme.Dark ? (
            <img src={light} alt="light" />
          ) : (
            <img src={dark} alt="dark" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
