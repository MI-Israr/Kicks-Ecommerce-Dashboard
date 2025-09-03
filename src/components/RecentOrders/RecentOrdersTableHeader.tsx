interface Props {
  title: string;
}

const RecentOrdersTableHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="w-full border-b border-gray-300 !py-[12px] flex justify-between">
      <h1 className="font-bold text-[24px]">{title}</h1>
      <img
        src="/src/assets/three-dots-vertical-bold.svg"
        alt=""
        className="cursor-pointer"
      />
    </div>
  );
};

export default RecentOrdersTableHeader;
