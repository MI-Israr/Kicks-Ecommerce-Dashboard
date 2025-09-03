import type { CustomerDetailsType } from "@/Data/customerDetails";
import CustomerDetailCard from "./CustomerDetailCard";
import CustomerDetailNote from "./CustomerDetailNote";
import UserIcon from "../../assets/User.svg";
import BucketIcon from "../../assets/shop.svg";
import MasterCardIcon from "../../assets/mastercard Icon.svg";

interface Props {
  order: CustomerDetailsType;
}

const CustomerDetailBottomContent: React.FC<Props> = ({ order }) => {
  const cards = [
    {
      img: UserIcon,
      title: "Customer",
      items: [
        { label: "Full Name", value: order.customer.fullName },
        { label: "Email", value: order.customer.email },
        { label: "Phone", value: order.customer.phone },
      ],
      buttonText: "View profile",
    },
    {
      img: BucketIcon,
      title: "Order Info",
      items: [
        { label: "Shipping", value: order.customer.shipping },
        { label: "Payment Method", value: order.customer.paymentMethod },
        { label: "Status", value: order.status },
      ],
      buttonText: "Download info",
    },
    {
      img: BucketIcon,
      title: "Deliver to",
      items: [{ label: "Address", value: order.customer.address }],
      buttonText: "View profile",
    },
    {
      title: "Payment Info",
      items: [
        {
          subImg: MasterCardIcon,
          label: "Master Card",
          value: order.paymentInfo.card ?? "-",
        },
        {
          label: "Business name",
          value: order.paymentInfo.businessName ?? "-",
        },
        {
          label: "Phone",
          value: order.customer.phone,
        },
      ],
    },
  ];
  return (
    <div className="grid allProduct:grid-cols-2 orderDetail:grid-cols-3 allProduct:grid-rows-2 gap-4 !mt-4">
      {cards.map((card, idx) => (
        <CustomerDetailCard key={idx} {...card} />
      ))}
      <CustomerDetailNote />
    </div>
  );
};

export default CustomerDetailBottomContent;
