import type { productDetailCardType } from "@/Data/productDetailCard";
import TagsArea from "./TagsArea";
import ProductDetailInput from "./ProductDetailInput";
import ProductDetailTextArea from "./ProductDetailTextArea";

interface ProductDetailFormProps {
  product: productDetailCardType;
}

const ProductDetailForm: React.FC<ProductDetailFormProps> = ({ product }) => {
  return (
    <form className=" flex flex-col gap-5 md:gap-6 w-full">
      <ProductDetailInput
        label="Product Name"
        placeholder="Enter product name"
        type="text"
        product={product.title}
      />
      <ProductDetailTextArea
        label="Description"
        row={3}
        placeholder="Enter description"
        product={product.summary}
      />
      <ProductDetailInput
        label="Category"
        type="text"
        placeholder="Category"
        product={product.category}
      />
      <ProductDetailInput
        label="Brand Name"
        type="text"
        placeholder="Brand"
        product={product.brandName}
      />
      <div className="grid grid-cols-2 gap-4">
        <ProductDetailInput
          label="SKU"
          type="text"
          placeholder="SKU"
          product={`#${product.sku}`}
        />
        <ProductDetailInput
          label="Stock Quantity"
          type="number"
          placeholder="SKU"
          product={product.stockQuantity}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProductDetailInput
          label="Regular Price"
          type="number"
          placeholder="Price"
          product={product.regularPrice}
        />
        <ProductDetailInput
          label="Sale Price"
          type="number"
          placeholder="Sale Price"
          product={product.salesPrice}
        />
      </div>
      <TagsArea product={product} />
    </form>
  );
};

export default ProductDetailForm;
