import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import "../assets/css/common.scss";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const iconSize = {
    width: "27px",
    height: "27px",
  };
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#93BFCF",
        height: "100%",
      }}
    >
      <ul className="w-100 list-type-none">
        <li>
          <HomeRoundedIcon sx={iconSize} />
          <p>Home</p>
        </li>
        <li onClick={() => navigate("notebook")}>
          <AutoStoriesRoundedIcon sx={iconSize} />
          <p>NoteBooks</p>
        </li>
        <li onClick={() => navigate("notes")}>
          <FormatListBulletedRoundedIcon sx={iconSize} />
          <p>Notes</p>
        </li>
        <li>
          <PeopleAltIcon sx={iconSize} />
          <p>Share</p>
        </li>
      </ul>
      <div className="d-flex gap-2">
        <SettingsIcon sx={iconSize} />
        <p>Settings</p>
      </div>
    </div>
  );
};

export default SideBar;
