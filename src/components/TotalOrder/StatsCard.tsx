interface StatsCardData {
  data: {
    title: string;
    icon: string;
    price: number;
    growth: number;
    compare: string;
  };
}

const StatsCard: React.FC<StatsCardData> = ({ data }) => {
  return (
    <div className="flex flex-col gap-[12px] w-[100%] !px-[16px] !py-[24px] bg-white rounded-2xl">
      <div className="flex justify-between ">
        <h3 className="font-bold">{data.title}</h3>
        <div>
          <img src="/src/assets/three-dots-vertical-bold.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="!p-[10px] rounded bg-[#4A69E2]">
          <img src={data.icon} alt="" />
        </div>
        <div className="flex justify-between w-[100%]">
          <h3 className="font-bold">${data.price}</h3>
          <div className="flex items-center gap-[2px]">
            <img src="/src/assets/arrow_up.svg" alt="" />
            <p>{data.growth}%</p>
          </div>
        </div>
      </div>
      <div className="self-end">
        <p className="text-[14px] text-gray-500">Compared to {data.compare}</p>
      </div>
    </div>
  );
};

export default StatsCard;
