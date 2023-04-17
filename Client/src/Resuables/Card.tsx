import moment from "moment";
import { ICard } from "../Constant/Interfaces";
import "../assets/css/common.scss";

const Card = ({ data, handleNavigate }: ICard) => {
  return (
    <div className="card" onClick={() => handleNavigate(data._id)}>
      <p className="card-content">{data.content}</p>
      <div className="card-container">
        <p className="card-title">{data.title}</p>
        <p className="card-time">{moment(data.updatedAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default Card;
