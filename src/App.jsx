import React from "react";
import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Milk from "./milk";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Chocolate from "./chocolate";
import "./App.css";
import Cart from "./Cart";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import NotFound from "./NotFound";
import { useSelector } from "react-redux";
import { MdAccountCircle } from "react-icons/md";
import Orders from "./Orders";
import Account from "./Account";
import Bakery from "./Bakery";
import Signup from "./Signup";

function App() {
  let cartItems = useSelector((globalState) => globalState.cart);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <BrowserRouter>
        {/* ✅ Combined Navbar */}
        <div className="navbar">
          {/* Row 1: Logo + Search + Actions */}
          <div className="navbar-top">
            <div className="logo">
              <h1>🍴FoodiePlace</h1>
            </div>

            <div className="search-bar">
              <input type="text" placeholder="Search for items..." />
            </div>

            <div className="nav-actions">
              <Link to="/cart" className=" nav-links">
                🛒 Cart (<span className="cart-count">{cartCount}</span>)
              </Link>
              <Link to="/orders" className=" nav-links">
                📦 Orders
              </Link>
              <Link to="/signup" className=" nav-links">
                SignUp
              </Link>
              <Link to="/" className=" nav-links">
                <MdAccountCircle size={28} style={{ marginRight: "5px" }} />
                Account
              </Link>
            </div>
          </div>

          {/* Row 2: Category Links */}
          <div className="navbar-bottom">
            <Link to="/home" className=" nav-links">
              🏠Home
            </Link>
            <Link to="/veg" className=" nav-links">
              🥦VegItems
            </Link>
            <Link to="/nonveg" className=" nav-links">
              🍗Non-Veg
            </Link>
            <Link to="/bakery" className=" nav-links">
              🍔BakeryItems
            </Link>
            <Link to="/milk" className=" nav-links">
              🥛MilkItems
            </Link>
            <Link to="/chocolate" className=" nav-links">
              🍫Chocolate
            </Link>
            <Link to="/aboutus" className="nav-links">
              ℹ️AboutUs
            </Link>
            <Link to="/contactus" className=" nav-links">
              📞ContactUs
            </Link>
          </div>
        </div>

        {/* ✅ Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Account />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
