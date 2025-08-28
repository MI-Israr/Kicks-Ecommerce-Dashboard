import type { productDetailCardType } from "@/Data/productDetailCard";
import PreviewImage from "./PreviewImage";
import ProductGalleryUploader from "./ProductDetailUpload";

interface ProductsDetailRightProps {
  product: productDetailCardType;
}

const ProductsDetailRight: React.FC<ProductsDetailRightProps> = ({
  product,
}) => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center gap-[1.25rem]">
      <PreviewImage product={product} />
      <ProductGalleryUploader />
    </div>
  );
};

export default ProductsDetailRight;
