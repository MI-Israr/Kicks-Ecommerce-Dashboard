import LeftSide from "./LeftSide";
import RightSideButton from "./RightSideButton";
import RightSideDate from "./RightSideDate";

interface headerTitle {
  title: string;
  subTitle?: string;
  rightSideType?: "date" | "button";
}

const PageTitle: React.FC<headerTitle> = ({
  title,
  subTitle,
  rightSideType,
}) => {
  return (
    <div className="flex items-center justify-between w-[100%]">
      <LeftSide title={title} subTitle={subTitle} />
      {rightSideType === "date" && (
        <RightSideDate dateRange="Aug 20, 2025 - Aug 25, 2025" />
      )}
      {rightSideType === "button" && <RightSideButton />}
    </div>
  );
};

export default PageTitle;
