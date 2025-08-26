import { bestSellers } from "@/Data/bestSellers";
import type { BestSellersItem } from "@/Data/bestSellers";
import BestSellersHeader from "./BestSellersHeader";
import BestSellingItem from "./BestSellingItem";
import BestSellersFooter from "./BestSellersFooter";

const BestSellers = () => {
  return (
    <div className="!p-[20px] flex flex-col gap-[10px] rounded-2xl bg-white ">
      <BestSellersHeader
        title={bestSellers.header.title}
        img={bestSellers.header.threeDots}
      />
      {bestSellers.items.map((item: BestSellersItem, index: number) => (
        <BestSellingItem item={item} key={index} />
      ))}

      <BestSellersFooter text={bestSellers.footer.text} />
    </div>
  );
};

export default BestSellers;
