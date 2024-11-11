import React from "react";
import Card from "../Card/Card";
import "./Column.css";
import Assets from "../../assets/assests";
import { getColorForInitial } from "../../utility/utility";

const Column = ({ title, tasks, grouping, sorting, users }) => {
  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

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
      const initial = title.charAt(0).toUpperCase();
      const backgroundColor = getColorForInitial(initial);
      return (
        <div
          className="user-avatar"
          style={{ backgroundColor, marginRight: 10 }}
        >
          {initial}
        </div>
      );
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
        {typeof getIcon(title) === "string" ? (
          <img src={getIcon(title)} alt="Status Icon" className="status-icon" />
        ) : (
          getIcon(title)
        )}
        <h2 className="column-title">{title}</h2>
        <span className="task-count">{tasks.length}</span>
        <img src={Assets.Add} alt="Add button" className="add-button" />
        <img src={Assets.DotMenu} alt="Menu" className="menu-icon" />
      </div>
      {sortedTasks.map((task) => (
        <Card
          key={task.id}
          id={task.id}
          title={task.title}
          tag={task.tag}
          priority={task.priority}
          userName={getUserName(task.userId)}
        />
      ))}
    </div>
  );
};

export default Column;
