interface RegisterButtonProps {
  src: string;
}
const RegisterButton: React.FC<RegisterButtonProps> = ({ src }) => {
  return (
    <button className="social-btn">
      <img className="icon" src={src} alt="Apple" />
    </button>
  );
};

export default RegisterButton;
