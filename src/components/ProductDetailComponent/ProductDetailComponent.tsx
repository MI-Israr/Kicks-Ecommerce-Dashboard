import { useParams } from "react-router-dom";
import { productDetailCard } from "@/Data/productDetailCard";
import ProductDetailForm from "./ProductDetailForm";
import ProductsDetailRight from "./ProductsDetailRight";
import ProductDetailRightButtons from "./ProductDetailRightButtons";
const ProductDetailComponent = () => {
  const { id } = useParams();
  const product = productDetailCard.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <div className="!py-6 !px-2 md:!px-6 w-full bg-white rounded-xl flex flex-col gap-[2.938rem]">
      <div className="flex flex-col-reverse md:flex-row gap-[2.938rem]">
        <ProductDetailForm product={product} />
        <ProductsDetailRight product={product} />
      </div>
      <ProductDetailRightButtons />
    </div>
  );
};

export default ProductDetailComponent;
