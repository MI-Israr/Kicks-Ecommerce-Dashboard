const ProductDetailRightButtons = () => {
  return (
    <div className="flex w-[100%] justify-center gap-4 mt-4">
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
  );
};

export default ProductDetailRightButtons;
