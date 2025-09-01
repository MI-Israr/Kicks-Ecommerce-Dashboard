import type { UseFormRegisterReturn } from "react-hook-form";

interface ProductDetailTextProps {
  label: string;
  placeholder: string;
  row: number;
  product: string | number | undefined;
  registration?: UseFormRegisterReturn;
  error?: string;
}

const ProductDetailTextArea: React.FC<ProductDetailTextProps> = ({
  label,
  placeholder,
  row,
  product,
  registration,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1 ">
      <label className="font-medium">{label}</label>
      <textarea
        rows={row}
        {...registration}
        placeholder={placeholder}
        className="border border-[#232321] rounded-lg !px-3 !py-2 focus:outline-none focus:ring focus:ring-purple-400"
        defaultValue={product}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ProductDetailTextArea;
