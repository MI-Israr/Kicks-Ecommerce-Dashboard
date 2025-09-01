import { useParams } from "react-router-dom";
import {
  productDetailCard,
  type productDetailCardType,
  type ProductFormValues,
} from "@/Data/productDetailCard";
import ProductDetailForm from "./ProductDetailForm";
import ProductsDetailRight from "./ProductsDetailRight";
import ProductDetailRightButtons from "./ProductDetailRightButtons";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "@/schemas";

export const getProductDefaultValues = (
  product: productDetailCardType
): ProductFormValues => ({
  title: product.title,
  summary: product.summary,
  category: product.category,
  sku: product.sku,
  regularPrice: product.regularPrice,
  stockQuantity: product.stockQuantity ?? 0,
  brandName: product.brandName ?? "",
  salesPrice: product.salesPrice ?? 0,
  tags: product.tags ?? [],
});

const ProductDetailComponent = () => {
  const { id } = useParams();
  const product = productDetailCard.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const methods = useForm<ProductFormValues>({
    defaultValues: getProductDefaultValues(product),
    resolver: yupResolver(productSchema),
    mode: "onSubmit",
  });
  const onSubmit = (data: ProductFormValues) => {
    console.log("Form Data:", data);
  };

  const handleUpdateClick = methods.handleSubmit(onSubmit);
  const handleCancelClick = () => {
    methods.reset(getProductDefaultValues(product));
  };

  const handleDeleteClick = () => {
    console.log("Delete product id:", product.id);
  };

  return (
    <FormProvider {...methods}>
      <div className="!py-6 !px-2 md:!px-6 w-full bg-white rounded-xl flex flex-col gap-[2.938rem]">
        <div className="flex flex-col-reverse md:flex-row gap-[2.938rem]">
          <ProductDetailForm product={product} />
          <ProductsDetailRight product={product} />
        </div>
        <ProductDetailRightButtons
          onUpdate={handleUpdateClick}
          onCancel={handleCancelClick}
          onDelete={handleDeleteClick}
        />
      </div>
    </FormProvider>
  );
};

export default ProductDetailComponent;
