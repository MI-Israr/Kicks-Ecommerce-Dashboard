import type { BestSellersItem } from "@/Data/bestSellers";

interface bestSellingItemData {
  item: BestSellersItem;
}

const BestSellingItem: React.FC<bestSellingItemData> = ({ item }) => {
  return (
    <div className="w-[360px] flex items-center gap-[8px]">
      <div className="">
        <img src={item.img} alt="" />
      </div>
      <div className="w-[100%]">
        <div className="flex justify-between">
          <div className="">
            <div>
              <h3 className="text-[18px]">{item.title}</h3>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium">${item.price}</h3>
            <p className="text-gray-500">{item.sales} sales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingItem;
