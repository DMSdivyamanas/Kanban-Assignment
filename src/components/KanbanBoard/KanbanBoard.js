import React, { useState, useEffect } from "react";
import Column from "./Column";
import "./KanbanBoard.css";
import fetchData from "../../api/apiService";

const KanbanBoard = ({ grouping }) => {
  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadTickets = async () => {
      const data = await fetchData();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    loadTickets();
  }, []);

  useEffect(() => {
    const groupTickets = () => {
      if (grouping === "priority") {
        return tickets.reduce((acc, ticket) => {
          const priorityMap = {
            4: "Urgent",
            3: "High",
            2: "Medium",
            1: "Low",
            0: "No priority",
          };
          const priorityName = priorityMap[ticket.priority];
          if (!acc[priorityName]) acc[priorityName] = [];
          acc[priorityName].push(ticket);
          return acc;
        }, {});
      } else if (grouping === "user") {
        return tickets.reduce((acc, ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          const userName = user ? user.name : "Unknown User";
          if (!acc[userName]) acc[userName] = [];
          acc[userName].push(ticket);
          return acc;
        }, {});
      } else {
        return tickets.reduce((acc, ticket) => {
          const status = ticket.status;
          if (!acc[status]) acc[status] = [];
          acc[status].push(ticket);
          return acc;
        }, {});
      }
    };

    setGroupedTickets(groupTickets());
  }, [grouping, tickets, users]);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((key) => (
        <Column
          key={key}
          title={key}
          tasks={groupedTickets[key]}
          grouping={grouping}
          users={users}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
