interface ProductDetailTextProps {
  label: string;
  placeholder: string;
  row: number;
  product: string | number | undefined;
}

const ProductDetailTextArea: React.FC<ProductDetailTextProps> = ({
  label,
  placeholder,
  row,
  product,
}) => {
  return (
    <div className="flex flex-col gap-1 ">
      <label className="font-medium">{label}</label>
      <textarea
        rows={row}
        placeholder={placeholder}
        className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
        defaultValue={product}
      />
    </div>
  );
};

export default ProductDetailTextArea;
