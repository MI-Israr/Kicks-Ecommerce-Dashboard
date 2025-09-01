import CustomerDetailComp from "@/components/CustomerDetail/CustomerDetailComp";
import PageTitle from "@/components/PageTitle/PageTitle";

const OrderDetail = () => {
  return (
    <div className="flex flex-col gap-4">
      <PageTitle title="Orders Details" subTitle="Order List" />
      <CustomerDetailComp />
    </div>
  );
};

export default OrderDetail;
