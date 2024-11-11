import React from "react";
import Card from "../Card/Card";
import "./Column.css";
import Assets from "../../assets/assests";

const Column = ({ title, tasks, grouping }) => {
  const getIcon = () => {
    const iconMap = {
      Todo: Assets.ToDo,
      "In progress": Assets.InProgress,
      Done: Assets.Done,
      Canceled: Assets.Cancelled,
      Backlog: Assets.Backlog,
      "No priority": Assets.NoPriority,
      Low: Assets.LowPriority,
      Medium: Assets.MediumPriority,
      High: Assets.HighPriority,
      Urgent: Assets.UrgentPriorityColor,
    };

    if (grouping === "priority") {
      return iconMap[title] || Assets.NoPriority;
    } else if (grouping === "user") {
      return Assets.UserImage;
    } else {
      return iconMap[title] || Assets.ToDo;
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        <img src={getIcon()} alt="Status Icon" className="status-icon" />
        <h2 className="column-title">{title}</h2>
        <span className="task-count">{tasks.length}</span>
        <button className="add-button">+</button>
        <img src={Assets.DotMenu} alt="Menu" className="menu-icon" />
      </div>
      {tasks.map((task) => (
        <Card
          key={task.id}
          id={task.id}
          title={task.title}
          type={task.type}
          tag={task.tag}
        />
      ))}
    </div>
  );
};

export default Column;
