import { ITextArea } from "../Constant/Interfaces";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export const TextArea = ({ content, setContent }: ITextArea) => {
  return (
    <div>
      <textarea
        className="w-100 border-0 textArea"
        value={content}
        placeholder="Enter your notes here..."
        onChange={(e) => {
          setContent((prev: any) => {
            return { ...prev, content: e.target.value };
          });
        }}
      />
    </div>
  );
};
