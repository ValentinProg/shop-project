import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ShopItem from "./pages/shop/ShopItem/ShopItem";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbar setSearchValue={setSearchValue} />
        <Routes>
          <Route path="/" element={<Shop searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="//:id" element={<ShopItem />} />
        </Routes>
      </Router>
      <ToastContainer position="bottom-left" />
    </div>
  );
}

export default App;
