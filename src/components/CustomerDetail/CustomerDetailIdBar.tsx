interface Props {
  orderId: number;
  status: string;
}

const CustomerDetailIdBar: React.FC<Props> = ({ orderId, status }) => {
  return (
    <div className="w-[100%] flex gap-6">
      <h1 className="text-[1.25rem] font-bold">Orders ID: #{orderId}</h1>
      <span
        className={`flex items-center justify-center !px-3 !py-1 rounded-full text-sm ${
          status === "Delivered"
            ? "bg-[#4A69E2] text-[#c4d0ff]"
            : status === "Pending"
            ? "bg-[#ffa52fcc] text-yellow-100"
            : "bg-red-700 text-red-100"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default CustomerDetailIdBar;
