import RecentOrdersTableHeader from "../../components/RecentOrders/RecentOrdersTableHeader";
import OrdersDetailTableTitles from "./OrdersDetailTableTitles";
import OrdersDetailTableContent from "./OrdersDetailTableContent";
import { recentOrders } from "@/Data/recentOrder";
import OrdersDetailTotalPriceComp from "./OrdersDetailTotalPriceComp";

const OrdersDetailTable = () => {
  return (
    <div className="w-[100%] !p-[20px] bg-white rounded-2xl">
      <RecentOrdersTableHeader title="Products" />
      <table className="w-[100%]">
        <OrdersDetailTableTitles />
        <OrdersDetailTableContent recentOrders={recentOrders} />
      </table>
      <OrdersDetailTotalPriceComp recentOrders={recentOrders} />
    </div>
  );
};

export default OrdersDetailTable;
