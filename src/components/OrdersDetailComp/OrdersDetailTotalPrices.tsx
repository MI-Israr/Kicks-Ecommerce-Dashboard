interface Props {
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
}

const OrdersDetailTotalPrices: React.FC<Props> = ({
  subtotal,
  tax,
  discount,
  total,
}) => {
  return (
    <div className="flex flex-col gap-4 text-end">
      <p>${subtotal.toFixed(2)}</p>
      <p>${tax.toFixed(2)}</p>
      <p>${discount.toFixed(2)}</p>
      <h2 className="text-2xl font-[500]">${total.toFixed(2)}</h2>
    </div>
  );
};

export default OrdersDetailTotalPrices;
