interface Props {
  item: { subImg?: string; label: string; value: string };
}
const CustomerDetailCardSubHeading: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex gap-1.5 ">
      {item.subImg && item.label === "Master Card" && (
        <img src={item.subImg} alt="" />
      )}
      <p className="text-[#70706E]">
        {item.label}: {item.value}
      </p>
    </div>
  );
};

export default CustomerDetailCardSubHeading;
