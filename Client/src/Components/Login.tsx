import TextField from "@mui/material/TextField";
import Button from "../Resuables/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITabPanelProps } from "../Constant/Interfaces";
import { httpRequest } from "../services/http.request";

export function Login(props: ITabPanelProps) {
  const initialData = {
    email: "",
    password: "",
  };
  const { children, value, index, setAlert, closeAlert, ...other } = props;
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [formDetails, setFormDetails] = useState(initialData);
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (formDetails.email === "") {
      return setIsEmailError(true);
    } else if (formDetails.password === "") {
      return setIsPasswordError(true);
    }
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const isEmailValid = emailRegex.test(formDetails.email);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const isPasswordValid = passwordRegex.test(formDetails.password);

    if (!isEmailValid) {
      return setIsEmailError(true);
    }
    if (!isPasswordValid) {
      return setIsPasswordError(true);
    }

    const { status, message } = await httpRequest(
      "/login",
      "POST",
      formDetails
    );
    if (status === "success") {
      setAlert((prev: any) => {
        return {
          ...prev,
          alertType: "success",
          alertMessage: message,
          alertShow: true,
        };
      });
      setTimeout(() => {
        closeAlert();
        setFormDetails(initialData);
        navigate("/home");
      }, 1000);
    } else {
      setAlert((prev: any) => {
        return {
          ...prev,
          alertType: "error",
          alertMessage: message,
          alertShow: true,
        };
      });
      setTimeout(() => {
        closeAlert();
      }, 1000);
    }
  };
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <div className="d-flex flex-column gap-3 mt-4">
            <TextField
              label="Email"
              error={isEmailError}
              helperText={isEmailError ? "Incorrect entry." : ""}
              value={formDetails.email}
              onChange={(e) => {
                setFormDetails((prev) => {
                  return { ...prev, email: e.target.value };
                });
                setIsEmailError(false);
              }}
              id="custom-css-outlined-input"
            />
            <TextField
              label="Password"
              error={isPasswordError}
              helperText={isPasswordError ? "Incorrect entry." : ""}
              value={formDetails.password}
              onChange={(e) => {
                setFormDetails((prev) => {
                  return { ...prev, password: e.target.value };
                });
                setIsPasswordError(false);
              }}
              id="custom-css-outlined-input"
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Button
              label="Submit"
              btnClass="btn btn-dark text-light"
              btnAction={handleLogin}
            />
          </div>
        </>
      )}
    </div>
  );
}
