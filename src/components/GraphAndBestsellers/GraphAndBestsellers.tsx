import BestSellers from "../BestSellers/BestSellers";
import Graph from "../Graph/Graph";

const GraphAndBestsellers = () => {
  return (
    <div className="flex gap-[12px] allProduct:gap-[20px] md:flex-row flex-col w-full">
      <Graph />
      <BestSellers />
    </div>
  );
};

export default GraphAndBestsellers;
