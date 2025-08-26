import PageTitle from "@/components/PageTitle/PageTitle";
import RecentOrders from "@/components/RecentOrders/RecentOrders";

const OrdersList = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <PageTitle title="Orders List" rightSideType="date" />
      <RecentOrders />
    </div>
  );
};

export default OrdersList;
