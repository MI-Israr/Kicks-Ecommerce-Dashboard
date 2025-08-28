import "../../pages/HomePage/HomePage.css";
import Logo from "./Logo";
import Menu from "./Menu";

interface SideBarProps {
  isOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <Logo />
      <Menu setIsSidebarOpen={setIsSidebarOpen} />
    </aside>
  );
};

export default SideBar;
