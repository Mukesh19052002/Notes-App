import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IToolBar } from "../Constant/Interfaces";

const ToolBar = ({ handleSave, handleBack }: IToolBar) => {
  return (
    <div>
      <div></div>
      <div>
        <SaveIcon onClick={handleSave} />
        <ArrowBackIcon onClick={handleBack} />
      </div>
    </div>
  );
};

export default ToolBar;
