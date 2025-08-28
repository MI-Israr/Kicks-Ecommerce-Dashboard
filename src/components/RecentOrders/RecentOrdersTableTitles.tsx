const RecentOrdersTableTitles = () => {
  return (
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
  );
};

export default RecentOrdersTableTitles;
