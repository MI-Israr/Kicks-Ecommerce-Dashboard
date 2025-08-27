import { useState } from "react";
import "../../pages/HomePage/HomePage.css";
import NotificationsDropdown from "./NotificationDropdown/NotificationsDropdown";
import BellOne from "/src/assets/bell.svg";
import BellTwo from "/src/assets/bell-2.svg";
import "./Search/Search.css";
import { AdminDropdown } from "../AdminDropDown/AdminDropdown";
import Logo from "../SideBar/Logo";
// import Search from "./Search/Search";

const NavBar = () => {
  const [notification, setNotification] = useState(false);
  // const [search, setSearch] = useState(true);
  // const [mobileNav, setMobileNav] = useState(false);
  const handleNotification = () => {
    setNotification((prev) => !prev);
  };

  return (
    <header className="topbar">
      <div className="left-icons">
        <Logo />
      </div>
      <div className="right-icons">
        <form action="" className="search-form">
          <input
            type="search"
            placeholder="Search Here..."
            className="search-input"
            // onChange={() => setSearch((prev) => !prev)}
          />
          <i className="fa fa-search"></i>
        </form>
        {/* {search && <NotificationsDropdown />} */}
        {/* <div className="search">
          <Search />
        </div> */}
        <div className="bell" onClick={handleNotification}>
          <img src={notification ? BellTwo : BellOne} alt="" />
        </div>
        {notification && (
          <NotificationsDropdown handleNotification={handleNotification} />
        )}

        <AdminDropdown />
        <div className="hamburger">
          <img
            src="/src/assets/hamburger.png"
            alt=""
            // onClick={() => setMobileNav((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
