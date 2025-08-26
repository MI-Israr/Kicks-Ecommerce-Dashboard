import BestSellers from "../BestSellers/BestSellers";
import Graph from "../Graph/Graph";

const GraphAndBestsellers = () => {
  return (
    <div className="flex gap-[20px] w-full">
      <Graph />
      <BestSellers />
    </div>
  );
};

export default GraphAndBestsellers;
