import "../../pages/HomePage/HomePage.css";
import Logo from "./Logo";
import Menu from "./Menu";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Menu />
    </aside>
  );
};

export default SideBar;
