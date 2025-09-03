interface CategorieSubMenuItemProps {
  category: string;
  quantity: number;
}

const CategorieSubMenuItem: React.FC<CategorieSubMenuItemProps> = ({
  category,
  quantity,
}) => {
  return (
    <a href="#" className="flex w-[100%] justify-between items-center">
      <p>{category}</p>{" "}
      <span className="rounded bg-[#2563eb] text-white !p-2 min-w-[41px] flex items-center justify-center">
        {quantity}
      </span>
    </a>
  );
};

export default CategorieSubMenuItem;
