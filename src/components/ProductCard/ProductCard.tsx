import { productDetailCard } from "@/Data/productDetailCard";
import ProductCardMap from "./ProductCardMap";

const ProductCard = () => {
  return (
    <div className="w-full grid allProduct:grid-cols-2 xl:grid-cols-3 md:gap-[1.25rem] gap-[1rem]">
      <ProductCardMap productDetailCard={productDetailCard} />
    </div>
  );
};

export default ProductCard;
