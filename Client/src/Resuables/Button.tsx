import { IButton } from "../Constant/Interfaces";

const Button = ({ label, btnClass, btnAction }: IButton) => {
  return (
    <button className={btnClass} onClick={btnAction}>
      {label}
    </button>
  );
};

export default Button;
