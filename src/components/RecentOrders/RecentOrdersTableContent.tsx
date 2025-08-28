import { recentOrders } from "@/Data/recentOrder";
import { AppContext } from "@/Context/Context";
import { useContext } from "react";
import RecentOrdersTableContentRow from "./RecentOrdersTableContentRow";

const RecentOrdersTableContent = () => {
  const { filter } = useContext(AppContext);
  const filteredOrders = filter
    ? recentOrders.filter((order) => order.status === filter)
    : recentOrders;
  return (
    <tbody>
      {filteredOrders.map((order, index) => (
        <RecentOrdersTableContentRow order={order} key={index} />
      ))}
    </tbody>
  );
};

export default RecentOrdersTableContent;
