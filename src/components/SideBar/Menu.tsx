import { useState } from "react";
import ArrowDown from "/src/assets/down.svg";
import ArrowUp from "/src/assets/arrow-up.svg";
import { NavLink } from "react-router-dom";
import DBblack from "/src/assets/dashboard-black.svg";
import DBwhite from "/src/assets/dashboard-white.svg";
import ProductBlack from "/src/assets/albums-black.svg";
import Productwhite from "/src/assets/albums-white.svg";
import OrderBlack from "/src/assets/order-black.svg";
import OrderWhite from "/src/assets/order-white.svg";

const Menu = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  return (
    <nav className="menu">
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? "active" : ""} menu-item `}
      >
        {({ isActive }) => (
          <>
            <img src={isActive ? DBwhite : DBblack} alt="Dashboard" />
            Dashboard
          </>
        )}
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => `${isActive ? "active" : ""} menu-item `}
      >
        {({ isActive }) => (
          <>
            <img
              src={isActive ? Productwhite : ProductBlack}
              alt="All Products"
            />
            All Products
          </>
        )}
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) => `${isActive ? "active" : ""} menu-item `}
      >
        {({ isActive }) => (
          <>
            <img src={isActive ? OrderWhite : OrderBlack} alt="All Products" />
            Order List
          </>
        )}
      </NavLink>
      <div className="submenu  ">
        <button
          className="menu-item category"
          onClick={() => setIsCategoriesOpen((prev) => !prev)}
        >
          <p>Categories</p>
          <span>
            <img src={isCategoriesOpen ? ArrowUp : ArrowDown} alt="" />
          </span>
        </button>
        {isCategoriesOpen && (
          <div className="submenu-items">
            <a href="#">Sneakers</a>
            <a href="#">Running</a>
            <a href="#">Casual</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Menu;
