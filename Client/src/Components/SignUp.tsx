import TextField from "@mui/material/TextField";
import Button from "../Resuables/Button";
import { ITabPanelProps } from "../Constant/Interfaces";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { httpRequest } from "../services/http.request";

export function SignUp(props: ITabPanelProps) {
  const { children, value, index, setAlert, closeAlert, setValue, ...other } =
    props;
  const [error, setError] = useState({
    email: false,
    password: false,
    name: false,
    mobile: false,
  });
  const initialData = {
    name: "",
    email: "",
    password: "",
    mobile: "",
  };
  const [formDetails, setFormDetails] = useState(initialData);
  const navigate = useNavigate();
  const handleSignUp = async () => {
    if (formDetails.name === "") {
      return setError((prev) => {
        return { ...prev, name: true };
      });
    } else if (formDetails.email === "") {
      return setError((prev) => {
        return { ...prev, email: true };
      });
    } else if (formDetails.password === "") {
      return setError((prev) => {
        return { ...prev, password: true };
      });
    } else if (formDetails.mobile === "") {
      return setError((prev) => {
        return { ...prev, mobile: true };
      });
    }
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const isEmailValid = emailRegex.test(formDetails.email);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const isPasswordValid = passwordRegex.test(formDetails.password);
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const isNameValid = nameRegex.test(formDetails.name);
    const mobileRegex = /^[0]?[6789]\d{9}$/;
    const isMobileValid = mobileRegex.test(formDetails.mobile);

    if (!isNameValid) {
      return setError((prev) => {
        return { ...prev, name: true };
      });
    }
    if (!isEmailValid) {
      return setError((prev) => {
        return { ...prev, email: true };
      });
    }
    if (!isPasswordValid) {
      return setError((prev) => {
        return { ...prev, password: true };
      });
    }

    if (!isMobileValid) {
      return setError((prev) => {
        return { ...prev, mobile: true };
      });
    }
    const { status, message } = await httpRequest(
      "/signup",
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
        setValue(0);
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
              label="Name"
              error={error.name}
              helperText={error.name ? "Incorrect entry." : ""}
              value={formDetails.name}
              onChange={(e) => {
                setFormDetails((prev) => {
                  return { ...prev, name: e.target.value };
                });
                setError((prev) => {
                  return { ...prev, name: false };
                });
              }}
              id="custom-css-outlined-input"
            />
            <TextField
              label="Email"
              error={error.email}
              helperText={error.email ? "Incorrect entry." : ""}
              value={formDetails.email}
              onChange={(e) => {
                setFormDetails((prev) => {
                  return { ...prev, email: e.target.value };
                });
                setError((prev) => {
                  return { ...prev, email: false };
                });
              }}
              id="custom-css-outlined-input"
            />
            <TextField
              label="Password"
              error={error.password}
              helperText={error.password ? "Incorrect entry." : ""}
              value={formDetails.password}
              onChange={(e) => {
                setFormDetails((prev) => {
                  return { ...prev, password: e.target.value };
                });
                setError((prev) => {
                  return { ...prev, password: false };
                });
              }}
              id="custom-css-outlined-input"
            />
            <TextField
              label="Mobile"
              error={error.mobile}
              helperText={error.mobile ? "Incorrect entry." : ""}
              value={formDetails.mobile}
              onChange={(e) => {
                setFormDetails((prev) => {
                  return { ...prev, mobile: e.target.value };
                });
                setError((prev) => {
                  return { ...prev, mobile: false };
                });
              }}
              id="custom-css-outlined-input"
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Button
              label="Submit"
              btnClass="btn btn-dark text-light"
              btnAction={handleSignUp}
            />
          </div>
        </>
      )}
    </div>
  );
}
