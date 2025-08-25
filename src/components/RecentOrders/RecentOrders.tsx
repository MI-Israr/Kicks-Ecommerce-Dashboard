import { recentOrders } from "@/Data/recentOrder";
import "./RecentOrder.css";
const RecentOrders = () => {
  return (
    <div className="w-[100%] !p-[20px] bg-white rounded-2xl">
      <table className="w-[100%]">
        <thead className="border-b !mx-[20px]">
          <tr className="">
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
              className="text-center text-[14px]"
            >
              <td className="text-start">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="text-start">{order.product}</td>
              <td>#{order.orderId}</td>
              <td>{order.date}</td>
              <td>{order.customerName}</td>
              <td>{order.status}</td>
              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
