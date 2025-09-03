import "./RecentOrder.css";
import RecentOrdersTableContent from "./RecentOrdersTableContent";
import RecentOrdersTableHeader from "./RecentOrdersTableHeader";
import RecentOrdersTableTitles from "./RecentOrdersTableTitles";

const RecentOrdersTable = () => {
  return (
    <div className="w-[100%] !p-[20px] bg-white rounded-2xl">
      <RecentOrdersTableHeader title="Recent Orders" />
      <table className="w-[100%]">
        <RecentOrdersTableTitles />
        <RecentOrdersTableContent />
      </table>
    </div>
  );
};

export default RecentOrdersTable;
