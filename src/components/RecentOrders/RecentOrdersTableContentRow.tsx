import type { RecentOrder } from "@/Data/recentOrder";
import { useNavigate } from "react-router-dom";

interface RecentOrdersTableContentRowProps {
  order: RecentOrder;
}

const RecentOrdersTableContentRow: React.FC<
  RecentOrdersTableContentRowProps
> = ({ order }) => {
  const navigate = useNavigate();
  return (
    <tr
      style={{ padding: "30px" }}
      className="text-center text-[14px] border-b border-gray-300 hover:cursor-pointer"
      onClick={() => navigate(`/product-details/${order.orderId}`)}
    >
      <td className="text-start">
        <input type="checkbox" name="" id="" />
      </td>
      <td className="text-start">{order.product} </td>
      <td>#{order.orderId}</td>
      <td>{order.date}</td>
      <td>{order.customerName}</td>
      <td className="flex items-center justify-center gap-2">
        <span
          className={`w-[10px] h-[10px] rounded-4xl ${
            order.status === "Delivered" ? " bg-[#4A69E2]" : "bg-[#FFA52F]"
          }`}
        ></span>
        {order.status}
      </td>
      <td>${order.amount}</td>
    </tr>
  );
};

export default RecentOrdersTableContentRow;
