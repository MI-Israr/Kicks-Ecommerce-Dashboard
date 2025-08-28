interface CategorieSubMenuItemProps {
  category: string;
}

const CategorieSubMenuItem: React.FC<CategorieSubMenuItemProps> = ({
  category,
}) => {
  return <a href="#">{category}</a>;
};

export default CategorieSubMenuItem;
