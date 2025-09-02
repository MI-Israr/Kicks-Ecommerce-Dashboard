interface Props {
  dateRange: string;
}

const RightSideDate: React.FC<Props> = ({ dateRange }) => {
  return (
    <div className="flex gap-[8px] self-end">
      <img src="/src/assets/calendar.svg" alt="" />
      <div className="flex gap-[4px] text-[14px] md:text-[16px]">
        <p>{dateRange}</p>
        {/* <p>Aug 20, 2025</p>
        <span>-</span>
        <p>Aug 25, 2025</p> */}
      </div>
    </div>
  );
};

export default RightSideDate;
