import { useEffect, useState, useMemo } from "react";
import { httpRequest } from "../services/http.request";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Card from "../Resuables/Card";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Resuables/SearchBar";
import { filterCondition } from "../Constant/HelperFunctions";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleNavigate = (name: string) => {
    navigate(`${name}`);
  };

  const getAllNotes = async () => {
    try {
      const { status, message, data } = await httpRequest("/notes", "GET", {});
      if (status === "success") {
        setNotes(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let filteredNotes = useMemo(() => {
    let result = notes.filter((item) => filterCondition(item, search));
    return result;
  }, [search, notes]);

  useEffect(() => {
    getAllNotes();
  }, []);
  return (
    <>
      <div className="w-100">
        <div className="d-flex w-100 justify-content-between pe-3 ps-3 pt-2 align-items-center">
          <SearchBar search={search} setSearch={setSearch} />
          <AddRoundedIcon
            sx={{ width: "30px", height: "30px" }}
            onClick={() => handleNavigate("add")}
          />
        </div>
      </div>
      <div className="p-2">
        <div className="d-flex gap-3 flex-wrap p-2">
          {notes.length > 0 &&
            filteredNotes.map((item, index) => {
              return (
                <Card data={item} key={index} handleNavigate={handleNavigate} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Notes;
