import { recentOrders } from "@/Data/recentOrder";
import "./RecentOrder.css";
const RecentOrders = () => {
  return (
    <div className="w-[100%] !p-[20px] bg-white rounded-2xl">
      <div className="w-full border-b border-gray-300 !py-[12px] flex justify-between">
        <h1 className="font-bold text-[24px]">Recent Orders</h1>
        <img
          src="/src/assets/three-dots-vertical-bold.svg"
          alt=""
          className="cursor-pointer"
        />
      </div>
      <table className="w-[100%]">
        <thead className="border-b border-gray-300 !mx-[20px]">
          <tr>
            <th className="text-start">
              <input type="checkbox" name="" id="" />
            </th>
            <th className="text-start">Product</th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, index) => (
            <tr
              style={{ padding: "30px" }}
              key={index}
              className="text-center text-[14px] border-b border-gray-300"
            >
              <td className="text-start">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="text-start">{order.product}</td>
              <td>#{order.orderId}</td>
              <td>{order.date}</td>
              <td>{order.customerName}</td>
              <td className="flex items-center justify-center gap-2">
                <span
                  className={`w-[10px] h-[10px] rounded-4xl ${
                    order.status === "Delivered"
                      ? " bg-[#4A69E2]"
                      : "bg-[#FFA52F]"
                  }`}
                ></span>
                {order.status}
              </td>
              <td>${order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
