interface BestSellersFooterData {
  text: string;
}

const BestSellersFooter: React.FC<BestSellersFooterData> = ({ text }) => {
  return (
    <div>
      <div className="flex justify-between w-[100%]">
        <button className="bg-[#232321] text-white rounded cursor-pointer !px-[16px] !py-[8px]">
          {text}
        </button>
      </div>
    </div>
  );
};

export default BestSellersFooter;
