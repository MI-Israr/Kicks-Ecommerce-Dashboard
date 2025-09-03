import React from "react";
import CategorieSubMenuItem from "./CategorieSubMenuItem";

interface CategorieSubMenuItemsProps {
  isCategoriesOpen: boolean;
}

const CategorieSubMenuItems: React.FC<CategorieSubMenuItemsProps> = ({
  isCategoriesOpen,
}) => {
  return (
    <>
      {isCategoriesOpen && (
        <div className="submenu-items w-[198px]">
          <CategorieSubMenuItem category="Sneakers" quantity={21} />
          <CategorieSubMenuItem category="Running" quantity={32} />
          <CategorieSubMenuItem category="Golf" quantity={13} />
          <CategorieSubMenuItem category="Hiking" quantity={14} />
          <CategorieSubMenuItem category="Football" quantity={6} />
          <CategorieSubMenuItem category="Baseball" quantity={11} />
        </div>
      )}
    </>
  );
};

export default CategorieSubMenuItems;
