import { useNavigate } from "react-router-dom";
import Button from "../Resuables/Button";
import Logo from "../assets/svg/Logo";

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#3aafa9" }}>
      <div className="d-flex w-100 py-3 px-4 justify-content-between">
        <div>
          <Logo />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            label={"Login"}
            btnClass={"btn btn-dark px-3 h-75 me-3 align-items-center d-flex"}
            btnAction={() => {
              navigate("/login");
            }}
          />
          <Button
            label={"Sign Up"}
            btnClass={"btn btn-dark px-3 h-75 align-items-center d-flex"}
            btnAction={() => {
              navigate("/signup");
            }}
          />
        </div>
      </div>
      <div
        className="d-flex justify-content-center w-100  align-items-center"
        style={{ height: "492px" }}
      >
        <div className="w-50 mb-5 bg-white shadow-lg p-3 rounded">
          <p className="bg-white fw-bold text-dark ps-2 fs-2">
            Welcome to NoteIt...
          </p>
          <p className="bg-white text-dark ps-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
