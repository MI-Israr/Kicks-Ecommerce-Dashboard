interface ProductDetailInputProps {
  label: string;
  placeholder: string;
  type: string;
  product: string | number | undefined;
}

const ProductDetailInput: React.FC<ProductDetailInputProps> = ({
  label,
  placeholder,
  type,
  product,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
        defaultValue={product}
      />
    </div>
  );
};

export default ProductDetailInput;
