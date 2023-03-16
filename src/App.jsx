import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage/CartPage";
import ShopItem from "./components/ShopItem/ShopItem";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ShopPage/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="//:id" element={<ShopItem />} />
        </Routes>
      </Router>
      <ToastContainer position="bottom-left" />
    </div>
  );
}

export default App;
