import { useEffect, useState } from "react";
import { httpRequest } from "../services/http.request";
import { TitleInput } from "../Resuables/TitleInput";
import { TextArea } from "../Resuables/TextArea";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ToolBar from "../Resuables/ToolBar";
import Alerts from "../Resuables/Alerts";
import Card from "../Resuables/Card";

const Notes = () => {
  const initialAlert = {
    alertType: "",
    alertMessage: "",
    alertShow: false,
  };
  const [alert, setAlert] = useState(initialAlert);
  const [newNotesModal, setNewNotesModal] = useState(false);
  const [savedStatus, setSavedStatus] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const [notes, setNotes] = useState([]);
  const [newNotes, setNewNotes] = useState({
    title: "",
    content: "",
  });
  const handleCreateNotes = async () => {
    if (!newNotes.title || !newNotes.content) {
      return console.log("error");
    }

    try {
      const { status, message } = await httpRequest("/notes", "POST", {
        accessToken,
        title: newNotes.title,
        content: newNotes.content,
      });
      if (status === "success") {
        setAlert((prev) => {
          return {
            ...prev,
            alertShow: true,
            alertMessage: message,
            alertType: "success",
          };
        });
        getAllNotes();
        closeAlert();
      } else {
        setAlert((prev) => {
          return {
            ...prev,
            alertShow: true,
            alertMessage: message,
            alertType: "danger",
          };
        });
        closeAlert();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const closeAlert = () => {
    setTimeout(() => {
      setNewNotesModal(false);
      setAlert(initialAlert);
    }, 2000);
  };

  const getAllNotes = async () => {
    try {
      const { status, message, data } = await httpRequest("/notes", "GET", {});
      console.log(data);

      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);
  return (
    <div>
      {alert.alertShow ? (
        <Alerts type={alert.alertType} message={alert.alertMessage} />
      ) : null}
      <div className="w-100">
        {!newNotesModal && (
          <div className="d-flex w-100 justify-content-between pe-3 ps-3 pt-2">
            <div>
              <p>All your notes are here...!</p>
            </div>
            <AddRoundedIcon
              sx={{ width: "30px", height: "30px" }}
              onClick={() => setNewNotesModal(true)}
            />
          </div>
        )}
      </div>

      <div className="p-2">
        {newNotesModal ? (
          <div className="d-inline">
            <TitleInput
              title={newNotes.title}
              setTitle={setNewNotes}
              setStatus={setSavedStatus}
            />
            <TextArea
              content={newNotes.content}
              setContent={setNewNotes}
              setStatus={setSavedStatus}
            />
            <div>
              <ToolBar status={savedStatus} handleSave={handleCreateNotes} />
            </div>
          </div>
        ) : (
          <div className="d-flex gap-3 flex-wrap p-2">
            {notes.map((item, index) => {
              return <Card data={item} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
