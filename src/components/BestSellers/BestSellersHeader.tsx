interface headerData {
  title: string;
  img: string;
}

const BestSellersHeader: React.FC<headerData> = ({ title, img }) => {
  return (
    <div className="flex justify-between align-center border-b !pb-[10px] ">
      <h2 className="text-[20px] font-bold">{title}</h2>
      <img className="!py-[3px] !px-[7px] cursor-pointer" src={img} alt="" />
    </div>
  );
};

export default BestSellersHeader;
