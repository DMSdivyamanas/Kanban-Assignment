import React from "react";
import "./Card.css";
import Assets from "../../assets/assests";

const Card = ({ id, title, tag, priority, userImage }) => {
  const getPriorityIcon = () => {
    const priorityMap = {
      4: Assets.UrgentPriorityColor,
      3: Assets.HighPriority,
      2: Assets.MediumPriority,
      1: Assets.LowPriority,
      0: Assets.NoPriority,
    };
    return priorityMap[priority] || Assets.NoPriority;
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{id}</span>
        <img src={Assets.UserImage} alt="User" className="user-avatar" />
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="card-footer">
        <div className="card-icon" style={{ marginRight: 10 }}>
          <img src={getPriorityIcon()} alt="Priority" />
        </div>
        <span className="card-type">
          <span className="grey-dot">•</span> {tag}
        </span>
      </div>
    </div>
  );
};

export default Card;
