import React from "react";
import "./Card.css";
import Assets from "../../assets/assests";
import { getColorForInitial } from "../../utility/utility";
const Card = ({ id, title, tag, priority, userImage, userName }) => {
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

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const initial = getInitial(userName);
  const backgroundColor = getColorForInitial(initial);

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{id}</span>
        <div className="user-avatar-container">
          {userImage ? (
            <img src={userImage} alt="User" className="user-avatar" />
          ) : (
            <div className="user-avatar" style={{ backgroundColor }}>
              {initial}
            </div>
          )}
          <div className="status-indicator"></div>
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="card-footer">
        <div className="card-icon" style={{ marginRight: 10 }}>
          <img src={getPriorityIcon()} alt="Priority" />
        </div>
        <span className="card-type">
          <div className="grey-dot"></div> {tag}
        </span>
      </div>
    </div>
  );
};

export default Card;
