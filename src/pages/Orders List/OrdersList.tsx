import FilterBar from "@/components/FilterBar/FilterBar";
import PageTitle from "@/components/PageTitle/PageTitle";
import RecentOrders from "@/components/RecentOrders/RecentOrders";

const OrdersList = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <PageTitle title="Orders List" rightSideType="date" />
      <FilterBar />
      <RecentOrders />
    </div>
  );
};

export default OrdersList;
