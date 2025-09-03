const OrdersDetailTotalPriceHeading = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Subtotal</p>
      <p>Tax (20%)</p>
      <p>Discount</p>
      <h2 className="text-2xl font-[500]">Total</h2>
    </div>
  );
};

export default OrdersDetailTotalPriceHeading;
