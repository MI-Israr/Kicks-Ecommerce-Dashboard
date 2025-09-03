import TableHeaders from "../../components/RecentOrders/TableHeaders";

const OrdersDetailTableTitles = () => {
  const columns = [
    { key: "product", label: "Product Name", align: "start" },
    { key: "orderId", label: "Order ID", align: "center" },
    { key: "quantity", label: "Quantity", align: "center" },
    { key: "total", label: "Total", align: "right" },
  ];
  return <TableHeaders columns={columns} showCheckbox={false} />;
};

export default OrdersDetailTableTitles;
