import GraphAndBestsellers from "@/components/GraphAndBestsellers/GraphAndBestsellers";
import Header from "@/components/Header/Header";
import RecentOrders from "@/components/RecentOrders/RecentOrders";
import TotalOrder from "@/components/TotalOrder/TotalOrder";

const DashBoard = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <Header />
      <TotalOrder />
      <GraphAndBestsellers />
      <RecentOrders />
    </div>
  );
};

export default DashBoard;
