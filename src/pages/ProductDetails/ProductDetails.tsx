import PageTitle from "@/components/PageTitle/PageTitle";
import ProductDetailComponent from "./ProductDetailComponent";

function ProductDetails() {
  return (
    <div className="flex flex-col gap-[20px]">
      <PageTitle title="Product Details" subTitle="All Products" />
      <ProductDetailComponent />
    </div>
  );
}

export default ProductDetails;
