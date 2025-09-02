import CustomerDetailCardButton from "./CustomerDetailCardButton";
import CustomerDetailCardIcon from "./CustomerDetailCardIcon";
import CustomerDetailCardSubHeading from "./CustomerDetailCardSubHeading";

interface Props {
  img?: string;
  title: string;
  items: { subImg?: string; label: string; value: string }[];
  buttonText?: string;
}

const CustomerDetailCard: React.FC<Props> = ({
  img,
  title,
  items,
  buttonText,
}) => {
  return (
    <div className="w-[100%] !p-4 flex flex-col gap-4 border border-[#E7E7E3] rounded-xl">
      <div className=" flex gap-4">
        <div>{img && <CustomerDetailCardIcon img={img} />}</div>
        <div className="flex flex-col">
          <h2 className="font-[600] text-[1.2rem]">{title}</h2>
          {items.map((item, index) => (
            <CustomerDetailCardSubHeading item={item} key={index} />
          ))}
        </div>
      </div>
      {buttonText && <CustomerDetailCardButton buttonText={buttonText} />}
    </div>
  );
};

export default CustomerDetailCard;
