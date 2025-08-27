import { useParams } from "react-router-dom";
import { productDetailCard } from "@/Data/productDetailCard";

const ProductDetailComponent = () => {
  const { id } = useParams();
  const product = productDetailCard.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <div className="!p-6 w-full bg-white rounded-xl flex gap-[2.938rem]">
      <form className=" flex flex-col gap-6 w-full">
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
              defaultValue={product.tags}
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

        <div className="flex flex-col gap-2">
          <label className="font-medium">Tag</label>
          <div className="flex gap-2 flex-wrap">
            {["Adidas", "Shoes", "Sneakers", "Ultraboost"].map((tag) => (
              <span
                key={tag}
                className="!px-3 !py-1 bg-[#36323B] text-white rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </form>
      <div className="p-4 bg-white  flex flex-col gap-6 w-full">
        <div className="w-full flex justify-center">
          <img
            src={product.img}
            alt="Product"
            className="rounded-lg w-[300px] object-contain"
          />
        </div>

        <div>
          <h2 className="font-semibold ">Product Gallery</h2>

          <div className="border-2 border-dashed border-gray-300 rounded-lg !p-6 text-center cursor-pointer hover:bg-gray-50 !mb-4">
            <div className="flex flex-col items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16l5.58-5.58a2 2 0 012.83 0L21 21M14 14l7 7M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2h-5.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 0010.586 2H5a2 2 0 00-2 2v16a2 2 0 002 2z"
                />
              </svg>
              <p>
                Drop your image here, or{" "}
                <span className="text-blue-500">browse</span>
              </p>
              <p className="text-sm text-gray-400">Jpeg, png are allowed</p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg !p-4 bg-[#FAFAFA]"
              >
                <div className="flex items-center justify-between gap-4 w-[100%]">
                  <img
                    src={product.img}
                    alt="Thumbnail"
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="w-[100%]  flex flex-col gap-4">
                    <p className="text-gray-700 text-sm w-[100%]">
                      Product thumbnail.png
                    </p>
                    <div className="h-[6px] w-[100%] bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <div className="w-24 h-[6px] rounded-full bg-gray-200">
                    <div className="h-[6px] w-[100%] bg-blue-500 rounded-full"></div>
                  </div> */}
                    <img className="" src="/src/assets/done.svg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="bg-[#232321] text-white !px-6 !py-2 rounded-lg hover:bg-gray-700 cursor-pointer">
            UPDATE
          </button>
          <button className="bg-red-600 text-white !px-6 !py-2 rounded-lg hover:bg-red-700 cursor-pointer">
            DELETE
          </button>
          <button className="border border-gray-400 text-gray-700 !px-6 !py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
