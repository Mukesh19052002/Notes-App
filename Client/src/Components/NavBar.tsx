import Button from "../Resuables/Button";
import Logo from "../assets/svg/Logo";
import Face6Icon from "@mui/icons-material/Face6";

const NavBar = () => {
  return (
    <div style={{ backgroundColor: "#3aafa9", width: "100%" }}>
      <div className="d-flex w-100 py-2 px-4 justify-content-between">
        <div>
          <Logo />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center gap-1">
            <Face6Icon sx={{ width: "30px", height: "30px" }} />
            <p className="m-0">Mukesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
