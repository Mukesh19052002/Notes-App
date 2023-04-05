import { useEffect, useState } from "react";
import Spinner from "../Resuables/Spinner";
import Button from "../Resuables/Button";
import Logo from "../assets/svg/Logo";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Login } from "../Components/Login";
import { SignUp } from "../Components/SignUp";
import Alerts from "../Resuables/Alerts";

const Auth = () => {
  const initialAlert = {
    alertType: "",
    alertMessage: "",
    alertShow: false,
  };
  const [spinner, setSpinner] = useState(false);
  const [value, setValue] = useState(0);
  const [alert, setAlert] = useState(initialAlert);

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const closeAlert = () => {
    setTimeout(() => {
      setAlert(initialAlert);
    }, 2000);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      {alert.alertShow ? (
        <Alerts type={alert.alertType} message={alert.alertMessage} />
      ) : null}
      {spinner ? (
        <Spinner />
      ) : (
        <div style={{ backgroundColor: "#3aafa9" }}>
          <div className="d-flex w-100 py-3 px-4 justify-content-between">
            <div>
              <Logo />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <Button
                label={"Contact Us"}
                btnClass={"btn btn-dark px-3 h-75 align-items-center d-flex"}
                btnAction={() => {}}
              />
            </div>
          </div>

          <div
            className="d-flex justify-content-center w-100  align-items-center"
            style={{ height: "492px" }}
          >
            <div
              className="mb-5 bg-white shadow-lg p-3 rounded"
              style={{ width: "26rem" }}
            >
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      style={{
                        fontFamily: "cursive",
                        fontWeight: "600",
                      }}
                      label="Login"
                      {...a11yProps(0)}
                    />
                    <Tab
                      style={{ fontFamily: "cursive", fontWeight: "600" }}
                      label="SignUp"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
                <Login
                  value={value}
                  index={0}
                  setAlert={setAlert}
                  closeAlert={closeAlert}
                  setValue={setValue}
                />
                <SignUp
                  value={value}
                  index={1}
                  setAlert={setAlert}
                  closeAlert={closeAlert}
                  setValue={setValue}
                />
              </Box>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
