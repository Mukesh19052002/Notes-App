import { ICard } from "../Constant/Interfaces";
import { formatDate } from "../Constant/TimeStampConvert";
import "../assets/css/common.scss";

const Card = ({ data, key }: ICard) => {
  return (
    <div className="card">
      <p className="card-content">{data.content}</p>
      <div className="card-container">
        <p className="card-title">{data.title}</p>
        <p className="card-time">edited at {formatDate(data.updatedAt)}</p>
      </div>
    </div>
  );
};

export default Card;
