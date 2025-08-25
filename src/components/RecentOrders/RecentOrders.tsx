import { recentOrders } from "@/Data/recentOrder";

const RecentOrders = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Order ID</th>
          <th>Date</th>
          <th>Customer Name</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {recentOrders.map((order, index) => (
          <tr key={index}>
            <td>{order.product}</td>
            <td>{order.orderId}</td>
            <td>{order.date}</td>
            <td>{order.customerName}</td>
            <td>{order.status}</td>
            <td>{order.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentOrders;
