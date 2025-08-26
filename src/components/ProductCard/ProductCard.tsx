import { productDetailCard } from "@/Data/productDetailCard";
import ProductCardMap from "./ProductCardMap";

const ProductCard = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-[1.25rem]">
      <ProductCardMap productDetailCard={productDetailCard} />
    </div>
  );
};

export default ProductCard;
