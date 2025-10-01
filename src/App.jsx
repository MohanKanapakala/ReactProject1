import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdAccountCircle } from "react-icons/md";
import { logoutUser } from "./store";

import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Milk from "./Milk";
import Chocolate from "./Chocolate";
import Bakery from "./Bakery";
import Cart from "./Cart";
import Orders from "./Orders";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Account from "./Account";
import Signup from "./Signup";
import NotFound from "./NotFound";

import "./App.css";
import VoiceSearch from "./VoiceSearch";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { isAuthenticated, currentUser } = useSelector(
    (state) => state.authentication
  );


 const showVegItems = () => alert("Showing Veg Items 🌱");
 const addToCart = (item) => alert(`Added ${item} to cart 🍕`);


  return (
    <BrowserRouter>
      {/* ✅ Navbar */}
      <div className="navbar">
        <div className="navbar-wrapper">
          {/* === Row 1 === */}
          <div className="navbar-top">
            {/* Left: Logo */}
            <div className="logo">
              <h1>🍴FoodiePlace</h1>
            </div>

            {/* Middle: Search */}
            <div className="search-bar">
              <input type="text" placeholder="Search for items..." />
            </div>

            {/* Right: Auth Links */}
            <div className="nav-actions">
              {isAuthenticated ? (
                <>
                  <span className="nav-links">
                    👋 Welcome, {currentUser?.userName}
                  </span>
                  <button
                    onClick={() => dispatch(logoutUser())}
                    className="nav-links logout-btn"
                  >
                    Logout➡️
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signup" className="nav-links">
                    📝SignUp
                  </Link>
                  <Link to="/signin" className="nav-links">
                    <MdAccountCircle size={22} style={{ marginRight: "4px" }} />
                    SignIn
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* === Row 2 === */}
          <div className="navbar-bottom">
            <Link to="/" className="nav-links">
              🏠 Home
            </Link>

            {/* Dropdown Menu */}
            <div className="dropdown">
              <button className="dropbtn">&#9776; Menu 🍽️</button>
              <div className="dropdown-content">
                <Link to="/veg">🥦 VegItems</Link>
                <Link to="/nonveg">🍗 Non-Veg</Link>
                <Link to="/milk">🥛 MilkItems</Link>
                <Link to="/chocolate">🍫 Chocolates</Link>
                <Link to="/bakery">🍔 BakeryItems</Link>
              </div>
            </div>

            <Link to="/cart" className="nav-links">
              🛒 Cart (<span className="cart-count">{cartCount}</span>)
            </Link>
            <Link to="/orders" className="nav-links">
              📦 Orders
            </Link>
            <Link to="/aboutus" className="nav-links">
              ℹ️ AboutUs
            </Link>
            <Link to="/contactus" className="nav-links">
              📞 ContactUs
            </Link>
          </div>
        </div>
      </div>
      {/* return{" "} */}
      {/* <VoiceSearch showVegItems={showVegItems} addToCart={addToCart} />; */}
      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
