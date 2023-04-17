import { useState, useEffect } from "react";
import Spinner from "../Resuables/Spinner";
import Alerts from "../Resuables/Alerts";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Notes from "../Components/Notes";
import CRUDNotes from "../Components/CRUDNotes";

const Home = () => {
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);

  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="row m-0">
            <div className="col p-0">
              <NavBar />
            </div>
          </div>
          <div className="row m-0">
            <div className="col col-2 p-0" style={{ width: "15%" }}>
              <SideBar />
            </div>
            <div className="col p-0 w-75">
              <Routes>
                <Route path="notes" element={<Notes />} />
                <Route path="notes/:notesId" element={<CRUDNotes />} />
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
