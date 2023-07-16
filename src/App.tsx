import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage/CartPage";
import ShopItem from "./components/ShopItem/ShopItem";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import { createContext, useState } from "react";

// export const ThemeContext = createContext(null);
import { ThemeContext, Theme } from "./ThemeContext";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState(Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* <div className="appWrapper">
        <Router>
          <Navbar/>
          <main className="content">
            <Routes>
              <Route path="/" element={<ShopPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="//:id" element={<ShopItem />} />
            </Routes>
          </main>
        </Router>
      </div> */}

      <div className={`App ${theme}`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="//:id" element={<ShopItem />} />
          </Routes>
        </Router>
        <ToastContainer position="bottom-left" />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
