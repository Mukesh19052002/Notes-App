import { ITitleInput } from "../Constant/Interfaces";
import "../assets/css/common.scss";

export const TitleInput = ({ title, setTitle }: ITitleInput) => {
  return (
    <div>
      <input
        className="w-100 border-0 title-input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle((prev: any) => {
            return { ...prev, title: e.target.value };
          });
        }}
      />
    </div>
  );
};
