import GraphAndBestsellers from "@/components/GraphAndBestsellers/GraphAndBestsellers";
import PageTitle from "@/components/PageTitle/PageTitle";
import RecentOrders from "@/components/RecentOrders/RecentOrders";
import TotalOrder from "@/components/TotalOrder/TotalOrder";

const DashBoard = () => {
  return (
    <div className="flex flex-col gap-[10px] allProduct:gap-[20px]">
      <PageTitle title={"Dashboard"} rightSideType="date" />
      <TotalOrder />
      <GraphAndBestsellers />
      <RecentOrders />
    </div>
  );
};

export default DashBoard;
