import google from "../../assets/google-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import apple from "../../assets/apple-icon.svg";
import RegisterButton from "./RegisterButton";

const sources = [google, apple, facebook];

const RegisterSocialButtons = () => {
  return (
    <div className="social-buttons">
      {sources.map((src, index) => (
        <RegisterButton src={src} key={index} />
      ))}
    </div>
  );
};

export default RegisterSocialButtons;
