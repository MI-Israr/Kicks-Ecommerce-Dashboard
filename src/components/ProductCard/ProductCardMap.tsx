import type { productDetailCardType } from "@/Data/productDetailCard";
import ProductCardData from "./ProductCardData";

interface productData {
  productDetailCard: productDetailCardType[];
}

const ProductCardMap: React.FC<productData> = ({ productDetailCard }) => {
  return (
    <>
      {productDetailCard.map((item: productDetailCardType, index: number) => (
        <ProductCardData item={item} key={index} />
      ))}
    </>
  );
};

export default ProductCardMap;
