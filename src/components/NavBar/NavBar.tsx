import { useState } from "react";
import "../../pages/HomePage/HomePage.css";

import { AdminDropdown } from "../AdminDropDown/AdminDropdown";
import Logo from "../SideBar/Logo";
import Search from "./Search/Search";
import NotificationSection from "./NotificationDropdown/NotificationSection";

interface NavBarProps {
  toggleSidebar: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar }) => {
  const [notification, setNotification] = useState(false);
  const handleNotification = () => {
    setNotification((prev) => !prev);
  };

  return (
    <header className="topbar">
      <div className="left-icons">
        <Logo />
      </div>
      <div className="right-icons">
        <Search />
        <NotificationSection
          notification={notification}
          handleNotification={handleNotification}
        />

        <AdminDropdown />
        <div className="hamburger" onClick={toggleSidebar}>
          <img src="/src/assets/hamburger.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
