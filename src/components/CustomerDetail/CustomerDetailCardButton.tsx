interface Props {
  buttonText: string;
}

const CustomerDetailCardButton: React.FC<Props> = ({ buttonText }) => {
  return (
    <button className="bg-[#232321] !px-4 !py-2 text-white rounded-lg !text-[14px]">
      {buttonText}
    </button>
  );
};

export default CustomerDetailCardButton;
