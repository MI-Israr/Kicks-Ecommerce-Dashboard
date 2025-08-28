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
        <div className="submenu-items">
          <CategorieSubMenuItem category="Sneakers" />
          <CategorieSubMenuItem category="Running" />
          <CategorieSubMenuItem category="Casual" />
        </div>
      )}
    </>
  );
};

export default CategorieSubMenuItems;
