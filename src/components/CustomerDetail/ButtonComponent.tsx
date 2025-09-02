interface Props {
  img?: string;
  text?: string;
}

const ButtonComponent: React.FC<Props> = ({ img, text }) => {
  return (
    <button className="!px-4 !py-2 flex justify-center items-center rounded-lg bg-[#F4F2F2]">
      {img && <img src={img} alt="Print" />}{" "}
      {text && <p className="text-[14px]">{text}</p>}
    </button>
  );
};

export default ButtonComponent;
