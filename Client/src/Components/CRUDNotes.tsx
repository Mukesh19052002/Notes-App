import { ICRUDNotes } from "../Constant/Interfaces";
import { TextArea } from "../Resuables/TextArea";
import { TitleInput } from "../Resuables/TitleInput";
import ToolBar from "../Resuables/ToolBar";
import { useEffect, useState } from "react";
import { httpRequest } from "../services/http.request";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Resuables/Spinner";
import Alerts from "../Resuables/Alerts";

const CRUDNotes = () => {
  const initialAlert = {
    alertType: "",
    alertMessage: "",
    alertShow: false,
  };
  const initialNotes = {
    title: "",
    content: "",
  };
  const [alert, setAlert] = useState(initialAlert);
  const [spinner, setSpinner] = useState(false);
  const [newNotes, setNewNotes] = useState(initialNotes);
  const { notesId } = useParams();

  const getNoteById = async () => {
    try {
      const { status, message, data } = await httpRequest(
        `/notes/${notesId}`,
        "GET",
        {}
      );
      if (status === "success") {
        setNewNotes((prev: any) => {
          return { ...prev, title: data.title, content: data.content };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateNotes = async () => {
    if (!newNotes.title || !newNotes.content) {
      setAlert((prev) => {
        return {
          ...prev,
          alertShow: true,
          alertMessage: "Please fill the title and description",
          alertType: "danger",
        };
      });
      closeAlert();
      return;
    }
    if (notesId !== "add") {
      try {
        const { status, message } = await httpRequest(
          `/notes/${notesId}`,
          "PUT",
          {
            title: newNotes.title,
            content: newNotes.content,
          }
        );
        if (status === "success") {
          setAlert((prev) => {
            return {
              ...prev,
              alertShow: true,
              alertMessage: message,
              alertType: "success",
            };
          });
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
    } else {
      try {
        const { status, message } = await httpRequest("/notes", "POST", {
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
    }
  };

  const closeAlert = () => {
    setTimeout(() => {
      setAlert(initialAlert);
    }, 2000);
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    setSpinner(true);
    if (notesId) {
      getNoteById();
    }
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);

  return (
    <div className="p-2">
      {alert.alertShow ? (
        <Alerts type={alert.alertType} message={alert.alertMessage} />
      ) : null}
      {spinner ? (
        <Spinner />
      ) : (
        <div className="d-inline">
          <TitleInput title={newNotes.title} setTitle={setNewNotes} />
          <TextArea content={newNotes.content} setContent={setNewNotes} />
          <div>
            <ToolBar
              handleSave={handleCreateNotes}
              handleBack={handleNavigate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CRUDNotes;
