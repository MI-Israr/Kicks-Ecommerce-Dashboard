import type { RecentOrder } from "@/Data/recentOrder";
import RecentOrdersTableContentRow from "../RecentOrders/RecentOrdersTableContentRow";

interface Props {
  recentOrders: RecentOrder[];
}

const OrdersDetailTableContent: React.FC<Props> = ({ recentOrders }) => {
  return (
    <>
      {recentOrders?.map((order, index) => (
        <RecentOrdersTableContentRow
          order={order}
          key={index}
          showRecentOrderFields={false}
        />
      ))}
    </>
  );
};

export default OrdersDetailTableContent;
