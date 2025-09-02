interface Props {
  img: string;
}

const CustomerDetailCardIcon: React.FC<Props> = ({ img }) => {
  return (
    <div className="h-[48px] w-[48px] !p-3 bg-[#4A69E2] rounded-lg flex justify-center items-center">
      <img src={img} alt="user" />
    </div>
  );
};

export default CustomerDetailCardIcon;
