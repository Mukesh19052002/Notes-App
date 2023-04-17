import { useEffect, useState } from "react";
import Logo from "../assets/svg/Logo";
import Face6Icon from "@mui/icons-material/Face6";
import { httpRequest } from "../services/http.request";
import "../assets/css/common.scss";

const NavBar = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
  });
  const userData = async () => {
    try {
      const { status, message, data } = await httpRequest("/user", "GET", {});
      if (status === "success") {
        setUserDetails(data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userData();
  }, []);
  return (
    <div style={{ backgroundColor: "#6096B4", width: "100%" }}>
      <div className="d-flex w-100 py-2 px-4 justify-content-between">
        <div>
          <Logo />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center gap-1">
            {/* <Face6Icon sx={{ width: "30px", height: "30px" }} />
            <p className="m-0">{userDetails?.name}</p> */}
            <div className="btn-group">
              <div
                className="dropdown-toggle d-flex align-items-center gap-1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Face6Icon sx={{ width: "30px", height: "30px" }} />
                <p className="m-0">{userDetails?.name}</p>
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-li">
                  <p className="dropdown-item">Profile</p>
                </li>
                <li className="dropdown-li">
                  <p className="dropdown-item">Dummy</p>
                </li>
                <li className="dropdown-li">
                  <p className="dropdown-item">Settings</p>
                </li>
                <li className="dropdown-li">
                  <p className="dropdown-item logout">Logout</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
