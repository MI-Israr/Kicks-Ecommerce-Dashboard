import { useParams } from "react-router-dom";
import { CustomerDetails } from "@/Data/customerDetails";
import CustomerDetailTopBar from "./CustomerDetailTopBar";
import CustomerDetailBottomContent from "./CustomerDetailBottomContent";

const CustomerDetail = () => {
  const { orderId } = useParams();
  const order = CustomerDetails.find((o) => o.orderId === Number(orderId));

  if (!order) return <h2 className="text-2xl">Order not found</h2>;

  return (
    <div className="w-[100%] !px-2 !py-4 orderDetail:!px-4 orderDetail:!py-6 bg-white rounded-xl">
      <CustomerDetailTopBar order={order} />
      <CustomerDetailBottomContent order={order} />
    </div>
  );
};

export default CustomerDetail;
