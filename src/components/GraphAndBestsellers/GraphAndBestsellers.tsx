import BestSellers from "../BestSellers/BestSellers";
import { ChartAreaAxes } from "../Graph/ChartAreaAxes";

const GraphAndBestsellers = () => {
  return (
    <div className="flex gap-[20px]">
      <ChartAreaAxes />
      <BestSellers />
    </div>
  );
};

export default GraphAndBestsellers;
