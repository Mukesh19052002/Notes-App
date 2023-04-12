import { useState, useEffect } from "react";
import Spinner from "../Resuables/Spinner";
import Alerts from "../Resuables/Alerts";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Notes from "../Components/Notes";

const Home = () => {
  const initialAlert = {
    alertType: "",
    alertMessage: "",
    alertShow: false,
  };
  const [alert, setAlert] = useState(initialAlert);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);

  const closeAlert = () => {
    setTimeout(() => {
      setAlert(initialAlert);
    }, 10000);
  };
  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="row m-0">
            <div className="col p-0">
              <NavBar />
              {alert.alertShow ? (
                <Alerts type={alert.alertType} message={alert.alertMessage} />
              ) : null}
            </div>
          </div>
          <div className="row m-0" style={{ height: "89.2vh" }}>
            <div
              className="col col-2 p-0"
              style={{ height: "100%", width: "15%" }}
            >
              <SideBar />
            </div>
            <div className="col p-0 w-75">
              <Routes>
                <Route path="notes" element={<Notes />} />
                <Route path="notebook" element={<Notes />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
