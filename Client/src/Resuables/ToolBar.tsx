import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import BeenhereRoundedIcon from "@mui/icons-material/BeenhereRounded";
import { IToolBar } from "../Constant/Interfaces";

const ToolBar = ({ status, handleSave }: IToolBar) => {
  return (
    <div>
      <div></div>
      <div>
        {status ? (
          <BeenhereRoundedIcon />
        ) : (
          <SaveAsRoundedIcon onClick={handleSave} />
        )}
      </div>
    </div>
  );
};

export default ToolBar;
