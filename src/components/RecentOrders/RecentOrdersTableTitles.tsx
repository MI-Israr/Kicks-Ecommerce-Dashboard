import TableHeaders from "./TableHeaders";

const RecentOrdersTableTitles = () => {
  const columns = [
    { key: "product", label: "Product Name", align: "start" },
    { key: "orderId", label: "Order ID", align: "center" },
    { key: "date", label: "Date", align: "center" },
    { key: "quantity", label: "Quantity", align: "center" },
    { key: "customerName", label: "Customer Name", align: "center" },
    { key: "status", label: "Status", align: "center" },
    { key: "amount", label: "Amount", align: "center" },
  ];
  return <TableHeaders columns={columns} showCheckbox={true} />;
};

export default RecentOrdersTableTitles;
