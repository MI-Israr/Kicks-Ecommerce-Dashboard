import PageTitle from "@/components/PageTitle/PageTitle";
import ProductCard from "@/components/ProductCard/ProductCard";

const AllProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageTitle title="All Products" rightSideType="button" />
      <ProductCard />
    </div>
  );
};

export default AllProducts;
