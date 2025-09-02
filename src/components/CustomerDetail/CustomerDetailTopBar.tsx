import CustomerDetailIdBar from "./CustomerDetailIdBar";
import CustomerDetailStatusBar from "./CustomerDetailStatusBar";
import type { CustomerDetailsType } from "@/Data/customerDetails";

interface Props {
  order: CustomerDetailsType;
}

const CustomerDetailTopBar: React.FC<Props> = ({ order }) => {
  return (
    <div className="flex flex-col gap-4">
      <CustomerDetailIdBar orderId={order.orderId} status={order.status} />
      <CustomerDetailStatusBar dateRange={order.dateRange} />
    </div>
  );
};

export default CustomerDetailTopBar;
