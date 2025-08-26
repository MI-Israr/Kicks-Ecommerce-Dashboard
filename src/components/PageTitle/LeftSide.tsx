interface LeftSideProps {
  title: string;
}

const LeftSide: React.FC<LeftSideProps> = ({ title }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[24px] font-bold">{title}</h1>
      <div className="flex gap-[4px]">
        <p>Home</p>
        <span>&gt;</span>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default LeftSide;
