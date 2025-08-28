import type { productDetailCardType } from "@/Data/productDetailCard";

interface PreviewImageProps {
  product: productDetailCardType;
}

const PreviewImage: React.FC<PreviewImageProps> = ({ product }) => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={product.img}
        alt="Product"
        className="rounded-lg w-[300px] object-contain"
      />
    </div>
  );
};

export default PreviewImage;
