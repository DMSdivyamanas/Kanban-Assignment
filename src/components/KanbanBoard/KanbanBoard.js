import React from "react";
import Column from "./Column";
import "./KanbanBoard.css";

const KanbanBoard = () => {
  const columns = [
    {
      id: 1,
      title: "Todo",
      tasks: [
        {
          id: "CAM-4",
          title: "Add Multi-Language Support",
          type: "Feature Request",
        },
      ],
    },
    {
      id: 2,
      title: "In Progress",
      tasks: [
        {
          id: "CAM-3",
          title: "Optimize Database Queries for Performance",
          type: "Feature Request",
        },
      ],
    },
    {
      id: 3,
      title: "In Review",
      tasks: [
        { id: "CAM-5", title: "Review Code Quality", type: "Feature Request" },
      ],
    },
    {
      id: 4,
      title: "Done",
      tasks: [
        {
          id: "CAM-6",
          title: "Enhance Search Functionality",
          type: "Feature Request",
        },
      ],
    },
    { id: 5, title: "Canceled", tasks: [] },
  ];

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <Column key={column.id} title={column.title} tasks={column.tasks} />
      ))}
    </div>
  );
};

export default KanbanBoard;
