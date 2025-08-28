import DBblack from "/src/assets/dashboard-black.svg";
import DBwhite from "/src/assets/dashboard-white.svg";
import ProductBlack from "/src/assets/albums-black.svg";
import Productwhite from "/src/assets/albums-white.svg";
import OrderBlack from "/src/assets/order-black.svg";
import OrderWhite from "/src/assets/order-white.svg";
import MenuLinks from "./MenuLinks";
import CategorieSubMenu from "./CategorieSubMenu";

interface MenuProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ setIsSidebarOpen }) => {
  return (
    <nav className="menu">
      <MenuLinks
        to="/"
        title="Dashboard"
        setIsSidebarOpen={setIsSidebarOpen}
        white={DBwhite}
        black={DBblack}
      />
      <MenuLinks
        to="/products"
        title="All products"
        setIsSidebarOpen={setIsSidebarOpen}
        white={Productwhite}
        black={ProductBlack}
      />
      <MenuLinks
        to="/orders"
        title="Order list"
        setIsSidebarOpen={setIsSidebarOpen}
        white={OrderWhite}
        black={OrderBlack}
      />
      <CategorieSubMenu />
    </nav>
  );
};

export default Menu;
