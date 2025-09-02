import FilterButton from "../FilterBar/FilterButton";
import PrintIcon from "../../assets/print.svg";
import ButtonComponent from "./ButtonComponent";

const CustomerDetailStatusBarRight = () => {
  return (
    <div className="flex gap-5">
      <FilterButton />
      <div className="flex gap-5">
        <ButtonComponent img={PrintIcon} />
        <ButtonComponent text="Save" />
      </div>
    </div>
  );
};

export default CustomerDetailStatusBarRight;
