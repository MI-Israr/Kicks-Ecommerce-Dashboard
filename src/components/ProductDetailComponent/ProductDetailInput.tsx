import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
interface ProductDetailInputProps {
  label: string;
  placeholder: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  product: string | number | undefined;
  registration?: UseFormRegisterReturn;
  error?: string;
}

const ProductDetailInput: React.FC<ProductDetailInputProps> = ({
  label,
  placeholder,
  type,
  product,
  registration,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        {...registration}
        placeholder={placeholder}
        className="border border-[#232321] rounded-lg !px-3 !py-1 md:!py-2 focus:outline-none focus:ring focus:ring-purple-400"
        defaultValue={product}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ProductDetailInput;
