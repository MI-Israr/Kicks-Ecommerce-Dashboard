import { NavLink } from "react-router-dom";

interface MenuLinksProps {
  to: string;
  title: string;
  white: string;
  black: string;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuLinks: React.FC<MenuLinksProps> = ({
  to,
  title,
  white,
  black,
  setIsSidebarOpen,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${isActive ? "active" : ""} menu-item `}
      onClick={() => setIsSidebarOpen(false)}
    >
      {({ isActive }) => (
        <>
          <img src={isActive ? white : black} alt={title} />
          {title}
        </>
      )}
    </NavLink>
  );
};

export default MenuLinks;
