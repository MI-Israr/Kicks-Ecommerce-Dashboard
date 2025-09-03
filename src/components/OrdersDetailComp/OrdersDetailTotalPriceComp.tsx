import type { RecentOrder } from "@/Data/recentOrder";
import OrdersDetailTotalPriceHeading from "./OrdersDetailTotalPriceHeading";
import OrdersDetailTotalPrices from "./OrdersDetailTotalPrices";

interface Props {
  recentOrders: RecentOrder[];
}

const OrdersDetailTotalPriceComp: React.FC<Props> = ({ recentOrders }) => {
  const subtotal = recentOrders.reduce(
    (acc, order) => acc + order.amount * order.quantity,
    0
  );
  const tax = subtotal * 0.2;
  const discount = 0;
  const total = subtotal + tax - discount;
  return (
    <div className="flex w-[100%] !mt-6 justify-end">
      <div className="flex gap-10 ">
        <OrdersDetailTotalPriceHeading />
        <OrdersDetailTotalPrices
          subtotal={subtotal}
          tax={tax}
          discount={discount}
          total={total}
        />
      </div>
    </div>
  );
};

export default OrdersDetailTotalPriceComp;
