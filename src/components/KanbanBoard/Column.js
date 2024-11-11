// kanban-board/src/components/KanbanBoard/Column.js
import React from "react";
import Card from "../Card/Card";
import "./Column.css";
import Assets from "../../assets/assests";

const Column = ({ title, tasks }) => {
  return (
    <div className="column">
      <div className="column-header">
        <img
          src={Assets.InProgress}
          alt="Status Icon"
          className="status-icon"
        />
        <h2 className="column-title">{title}</h2>
        <span className="task-count">{tasks.length}</span>
        <button className="add-button">+</button>
        <img src={Assets.DotMenu} alt="Menu" className="menu-icon" />
      </div>
      {tasks.map((task) => (
        <Card key={task.id} id={task.id} title={task.title} type={task.type} />
      ))}
    </div>
  );
};

export default Column;
