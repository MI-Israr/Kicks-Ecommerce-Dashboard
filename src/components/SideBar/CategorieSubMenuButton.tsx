import ArrowUp from "/src/assets/arrow-up.svg";
import ArrowDown from "/src/assets/down.svg";

interface CategorieSubMenuButtonProps {
  isCategoriesOpen: boolean;
  setIsCategoriesOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategorieSubMenuButton: React.FC<CategorieSubMenuButtonProps> = ({
  isCategoriesOpen,
  setIsCategoriesOpen,
}) => {
  return (
    <button
      className="menu-item category"
      onClick={() => setIsCategoriesOpen((prev) => !prev)}
    >
      <p>Categories</p>
      <span>
        <img src={isCategoriesOpen ? ArrowUp : ArrowDown} alt="" />
      </span>
    </button>
  );
};

export default CategorieSubMenuButton;
