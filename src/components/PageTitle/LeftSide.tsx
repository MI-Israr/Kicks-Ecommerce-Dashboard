interface LeftSideProps {
  title: string;
  subTitle?: string;
}

const LeftSide: React.FC<LeftSideProps> = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[20px] md:text-[24px] font-bold">{title}</h1>
      <div className="flex gap-[4px] text-[14px] md:text-[16px]">
        <p>Home</p>
        {subTitle && (
          <>
            <span>&gt;</span>
            <p>{subTitle}</p>
          </>
        )}
        <span>&gt;</span>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default LeftSide;
