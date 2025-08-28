import type { productDetailCardType } from "@/Data/productDetailCard";
import TagsArea from "./TagsArea";

interface ProductDetailFormProps {
  product: productDetailCardType;
}

const ProductDetailForm: React.FC<ProductDetailFormProps> = ({ product }) => {
  return (
    <form className=" flex flex-col gap-5 md:gap-6 w-full">
      <div className="flex flex-col gap-1">
        <label className="font-medium text-lg">Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
          defaultValue={product.title}
        />
      </div>

      <div className="flex flex-col gap-1 text-lg">
        <label className="font-medium">Description</label>
        <textarea
          rows={3}
          placeholder="Enter description"
          className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
          defaultValue={product.summary}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium">Category</label>
        <input
          type="text"
          placeholder="Category"
          className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
          defaultValue={product.category}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium">Brand Name</label>
        <input
          type="text"
          placeholder="Brand"
          className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
          defaultValue={product.brandName}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium">SKU</label>
          <input
            type="text"
            placeholder="SKU"
            className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
            defaultValue={`#${product.sku}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium">Stock Quantity</label>
          <input
            type="number"
            placeholder="Stock"
            className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
            defaultValue={product.stockQuantity}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium">Regular Price</label>
          <input
            type="text"
            placeholder="Price"
            className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
            defaultValue={product.regularPrice}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium">Sale Price</label>
          <input
            type="text"
            placeholder="Sale Price"
            className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
            defaultValue={product.salesPrice}
          />
        </div>
      </div>
      <TagsArea product={product} />
    </form>
  );
};

export default ProductDetailForm;
