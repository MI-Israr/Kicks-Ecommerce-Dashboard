import type { productDetailCardType } from "@/Data/productDetailCard";
import type { ProductFormValues } from "@/Data/productDetailCard";
import { useFormContext } from "react-hook-form";
import TagsArea from "./TagsArea";
import ProductDetailInput from "./ProductDetailInput";
import ProductDetailTextArea from "./ProductDetailTextArea";

interface ProductDetailFormProps {
  product: productDetailCardType;
}

const ProductDetailForm: React.FC<ProductDetailFormProps> = ({ product }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormValues>();

  return (
    <form className=" flex flex-col gap-5 md:gap-6 w-full">
      <ProductDetailInput
        label="Product Name"
        placeholder="Enter product name"
        type="asdasd"
        product={product.title}
        registration={register("title")}
        error={errors.title?.message}
      />
      <ProductDetailTextArea
        label="Description"
        row={3}
        placeholder="Enter description"
        product={product.summary}
        registration={register("summary")}
        error={errors.summary?.message}
      />
      <ProductDetailInput
        label="Category"
        type="text"
        placeholder="Category"
        product={product.category}
        registration={register("category")}
        error={errors.category?.message}
      />
      <ProductDetailInput
        label="Brand Name"
        type="text"
        placeholder="Brand"
        product={product.brandName}
        registration={register("brandName")}
        error={errors.brandName?.message}
      />
      <div className="grid grid-cols-2 gap-4">
        <ProductDetailInput
          label="SKU"
          type="text"
          placeholder="SKU"
          product={`#${product.sku}`}
          registration={register("sku")}
          error={errors.sku?.message}
        />
        <ProductDetailInput
          label="Stock Quantity"
          type="number"
          placeholder="SKU"
          product={product.stockQuantity}
          registration={register("stockQuantity")}
          error={errors.stockQuantity?.message}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProductDetailInput
          label="Regular Price"
          type="number"
          placeholder="Price"
          product={product.regularPrice}
          registration={register("regularPrice")}
          error={errors.regularPrice?.message}
        />
        <ProductDetailInput
          label="Sale Price"
          type="number"
          placeholder="Sale Price"
          product={product.salesPrice}
          registration={register("salesPrice")}
          error={errors.salesPrice?.message}
        />
      </div>
      <TagsArea
        registration={register("tags")}
        error={errors.tags?.message}
        product={product}
      />
    </form>
  );
};

export default ProductDetailForm;
