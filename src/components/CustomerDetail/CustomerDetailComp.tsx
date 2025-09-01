import { useParams } from "react-router-dom";
import { CustomerDetails } from "@/Data/customerDetails";
import CustomerDetailTopBar from "./CustomerDetailTopBar";
import CustomerDetailCards from "./CustomerDetailCards";
import CustomerPaymetDetail from "./CustomerPaymetDetail";

const CustomerDetail = () => {
  const { orderId } = useParams();
  const order = CustomerDetails.find((o) => o.orderId === Number(orderId));

  if (!order) return <h2>Order not found</h2>;
  return (
    <div>
      <CustomerDetailTopBar />
      <CustomerDetailCards />
      <CustomerPaymetDetail />
    </div>
  );
};

export default CustomerDetail;
