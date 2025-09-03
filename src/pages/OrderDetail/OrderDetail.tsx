import CustomerDetailComp from "@/components/CustomerDetail/CustomerDetailComp";
import OrdersDetailTable from "../../components/OrdersDetailComp/OrdersDetailComp";
import PageTitle from "@/components/PageTitle/PageTitle";

const OrderDetail = () => {
  return (
    <div className="flex flex-col gap-4">
      <PageTitle title="Orders Details" subTitle="Order List" />
      <CustomerDetailComp />
      <OrdersDetailTable />
    </div>
  );
};

export default OrderDetail;
