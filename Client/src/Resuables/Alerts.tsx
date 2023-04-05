import Alert from "@mui/material/Alert";
import { IAlert } from "../Constant/Interfaces";

const Alerts = ({ type, message }: IAlert) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "300px",
        top: "70px",
        right: "10px",
      }}
    >
      {type === "success" ? (
        <Alert severity="success">{message}</Alert>
      ) : (
        <Alert severity="error">{message}</Alert>
      )}
    </div>
  );
};

export default Alerts;
