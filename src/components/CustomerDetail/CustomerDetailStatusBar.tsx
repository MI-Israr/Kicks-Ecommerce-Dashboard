import RightSideDate from "../PageTitle/RightSideDate";
import CustomerDetailStatusBarRight from "./CustomerDetailStatusBarRight ";

interface Props {
  dateRange: string;
}

const CustomerDetailStatusBar: React.FC<Props> = ({ dateRange }) => {
  return (
    <div className="flex justify-between items-center">
      <RightSideDate dateRange={dateRange} />
      <CustomerDetailStatusBarRight />
    </div>
  );
};

export default CustomerDetailStatusBar;
