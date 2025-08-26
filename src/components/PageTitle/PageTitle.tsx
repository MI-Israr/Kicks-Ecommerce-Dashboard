import LeftSide from "./LeftSide";
import RightSideButton from "./RightSideButton";
import RightSideDate from "./RightSideDate";

interface headerTitle {
  title: string;
  rightSideType?: "date" | "button";
}

const PageTitle: React.FC<headerTitle> = ({ title, rightSideType }) => {
  return (
    <div className="flex items-center justify-between w-[100%]">
      <LeftSide title={title} />
      {rightSideType === "date" && <RightSideDate />}
      {rightSideType === "button" && <RightSideButton />}
    </div>
  );
};

export default PageTitle;
