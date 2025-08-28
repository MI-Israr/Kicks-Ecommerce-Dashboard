import { useState } from "react";

import CategorieSubMenuItems from "./CategorieSubMenuItems";
import CategorieSubMenuButton from "./CategorieSubMenuButton";

const CategorieSubMenu = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  return (
    <div className="submenu  ">
      <CategorieSubMenuButton
        isCategoriesOpen={isCategoriesOpen}
        setIsCategoriesOpen={setIsCategoriesOpen}
      />
      <CategorieSubMenuItems isCategoriesOpen={isCategoriesOpen} />
    </div>
  );
};

export default CategorieSubMenu;
