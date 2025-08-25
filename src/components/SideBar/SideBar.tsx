import "../../pages/HomePage/HomePage.css";
import Logo from "./Logo";
import Menu from "./Menu";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Menu />
      <div className="sidebar-footer">© 2023 - Kicks Dashboard</div>
    </aside>
  );
};

export default SideBar;
