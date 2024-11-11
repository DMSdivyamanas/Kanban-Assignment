import React from "react";
import Card from "../Card/Card";
import "./Column.css";
import Assets from "../../assets/assests";

const Column = ({ title, tasks, grouping, sorting, users }) => {
  const getIcon = () => {
    const iconMap = {
      Todo: Assets.ToDo,
      "In progress": Assets.InProgress,
      Done: Assets.Done,
      Canceled: Assets.Cancelled,
      Backlog: Assets.Backlog,
      Urgent: Assets.UrgentPriorityColor,
      High: Assets.HighPriority,
      Medium: Assets.MediumPriority,
      Low: Assets.LowPriority,
      "No priority": Assets.NoPriority,
    };

    if (grouping === "priority") {
      return iconMap[title] || Assets.NoPriority;
    } else if (grouping === "user") {
      const user = users.find((user) => user.id === title);
      return user ? user.image : Assets.UserImage;
    } else {
      return iconMap[title] || Assets.ToDo;
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sorting === "priority") {
      return b.priority - a.priority; // Descending order
    } else if (sorting === "title") {
      return a.title.localeCompare(b.title); // Ascending order
    }
    return 0;
  });

  return (
    <div className="column">
      <div className="column-header">
        <img src={getIcon()} alt="Status Icon" className="status-icon" />
        <h2 className="column-title">{title}</h2>
        <span className="task-count">{tasks.length}</span>
        <button className="add-button">+</button>
        <img src={Assets.DotMenu} alt="Menu" className="menu-icon" />
      </div>
      {sortedTasks.map((task) => (
        <Card
          key={task.id}
          id={task.id}
          title={task.title}
          tag={task.tag}
          priority={task.priority}
        />
      ))}
    </div>
  );
};

export default Column;
