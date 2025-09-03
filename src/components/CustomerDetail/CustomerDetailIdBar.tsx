import { AppContext } from "@/Context/Context";
import type { OrderStatus } from "@/Data/recentOrder";
import { useContext, useEffect, useState } from "react";

interface Props {
  orderId: number;
}

const CustomerDetailIdBar: React.FC<Props> = ({ orderId }) => {
  const { filter } = useContext(AppContext);
  const [status, setStatus] = useState<OrderStatus | "Pending">("Pending");

  useEffect(() => {
    if (filter === "Delivered" && status === "Pending") {
      setStatus("Delivered");
    } else if (filter === "Canceled" && status === "Pending") {
      setStatus("Canceled");
    } else if (filter === null) {
      setStatus("Pending");
    }
  }, [filter]);
  return (
    <div className="w-[100%] flex gap-6">
      <h1 className="text-[1.25rem] font-bold">Orders ID: #{orderId}</h1>
      <span
        className={`flex items-center justify-center !px-3 !py-1 rounded-full text-sm ${
          status === "Delivered"
            ? "text-[#4A69E2] bg-[#e8edff] border border-[#4A69E2]"
            : status === "Pending"
            ? // ? "bg-[#ffa52fcc] text-yellow-100"
              "text-[#ffa52fcc] bg-[#fff0dbcc] border border-[#ffa52fcc]"
            : // : "bg-red-700 text-red-100"
              "text-red-800 bg-red-200 border border-red-800"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default CustomerDetailIdBar;
