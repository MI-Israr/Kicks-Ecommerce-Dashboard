import type { RecentOrder } from "@/Data/recentOrder";
import { useNavigate } from "react-router-dom";

interface RecentOrdersTableContentRowProps {
  order: RecentOrder;
  showRecentOrderFields: boolean;
}

const RecentOrdersTableContentRow: React.FC<
  RecentOrdersTableContentRowProps
> = ({ order, showRecentOrderFields }) => {
  const navigate = useNavigate();
  return (
    <tbody>
      <tr
        style={{ padding: "30px" }}
        className="text-center text-[14px] border-b border-gray-300 hover:cursor-pointer"
        onClick={() => navigate(`/orders-detail/${order.orderId}`)}
      >
        {/* <td className="text-start ">
        <input type="checkbox" name="" id="" />
      </td> */}
        <td className="text-start flex gap-3">
          <input type="checkbox" name="" id="" />
          {order.product}
        </td>
        <td>#{order.orderId}</td>
        {showRecentOrderFields && <td>{order.date}</td>}
        <td>{order.quantity}</td>
        {showRecentOrderFields && <td>{order.customerName}</td>}
        {showRecentOrderFields && (
          <td className="flex items-center justify-center gap-2">
            <span
              className={`w-[10px] h-[10px] rounded-4xl ${
                order.status === "Delivered" ? " bg-[#4A69E2]" : "bg-[#FFA52F]"
              }`}
            ></span>
            {order.status}
          </td>
        )}
        {showRecentOrderFields ? (
          <td>${order.amount}</td>
        ) : (
          <td className="text-right">${order.amount * order.quantity}</td>
        )}
      </tr>
    </tbody>
  );
};

export default RecentOrdersTableContentRow;
