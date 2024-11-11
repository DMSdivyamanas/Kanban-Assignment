import React from "react";
import "./Card.css";
import Assets from "../../assets/assests";

const Card = ({ id, title, type, userImage }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{id}</span>
        <img src={userImage} alt="User" className="user-avatar" />
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="card-footer">
        <div className="card-icon">
          <img src={Assets.Done} alt="Priority" />
        </div>
        <span className="card-type">{type}</span>
      </div>
    </div>
  );
};

export default Card;
