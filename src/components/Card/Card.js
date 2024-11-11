import React from "react";
import "./Card.css";
import Assets from "../../assets/assests";

const Card = ({ id, title, tag, userImage }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{id}</span>
        <img src={Assets.UserImage} alt="User" className="user-avatar" />
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="card-footer">
        <div className="card-icon">
          <img src={Assets.DotMenu} alt="Priority" />
        </div>
        <span className="card-type">{tag}</span>
      </div>
    </div>
  );
};

export default Card;
