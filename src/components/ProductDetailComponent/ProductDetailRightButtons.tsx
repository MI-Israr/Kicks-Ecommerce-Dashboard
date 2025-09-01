type Props = {
  onUpdate: () => void;
  onDelete: () => void;
  onCancel: () => void;
  submitting?: boolean;
};

const ProductDetailRightButtons = ({
  onUpdate,
  onDelete,
  onCancel,
  submitting,
}: Props) => {
  return (
    <div className="flex w-[100%] justify-center gap-3 md:gap-4 mt-4 text-[12px]">
      <button
        className="bg-[#232321] text-white !py-2 md:!px-6 !px-4 rounded-lg hover:bg-gray-700 cursor-pointer"
        type="button"
        onClick={onUpdate}
        disabled={submitting}
      >
        UPDATE
      </button>
      <button
        className="bg-red-600 text-white md:!px-6 !px-4 !py-2 rounded-lg hover:bg-red-700 cursor-pointer"
        type="button"
        onClick={onDelete}
      >
        DELETE
      </button>
      <button
        className="border border-gray-400 text-gray-700 md:!px-6 !px-4  !py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
        type="button"
        onClick={onCancel}
      >
        CANCEL
      </button>
    </div>
  );
};

export default ProductDetailRightButtons;
