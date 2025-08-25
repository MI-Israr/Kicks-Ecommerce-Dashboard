import { comparisonCardData } from "@/Data/comparisonCardData";
import type { comparisonCardDataTypes } from "@/Data/comparisonCardData";
import StatsCard from "./StatsCard";

const TotalOrder = () => {
  return (
    <div className="grid grid-cols-3 w-[100%] gap-[20px]">
      {comparisonCardData.map((data: comparisonCardDataTypes) => (
        <StatsCard data={data} key={data.title} />
      ))}
    </div>
  );
};

export default TotalOrder;
