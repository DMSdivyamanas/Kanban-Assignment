import React, { useState, useEffect } from "react";
import Column from "./Column";
import "./KanbanBoard.css";
import fetchData from "../../api/apiService";

const KanbanBoard = ({ grouping, sorting }) => {
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
      const initialGroupedTickets = {
        Backlog: [],
        Todo: [],
        "In progress": [],
        Done: [],
        Canceled: [],
      };

      if (grouping === "priority") {
        return tickets.reduce((acc, ticket) => {
          const priorityMap = {
            0: "No priority",
            4: "Urgent",
            3: "High",
            2: "Medium",
            1: "Low",
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
        }, initialGroupedTickets);
      }
    };

    setGroupedTickets(groupTickets());
  }, [grouping, tickets, users]);

  const getOrder = () => {
    if (grouping === "priority") {
      return ["No priority", "Urgent", "High", "Medium", "Low"];
    } else if (grouping === "user") {
      return Object.keys(groupedTickets).sort(); // Alphabetical order
    } else {
      return ["Backlog", "Todo", "In progress", "Done", "Canceled"];
    }
  };

  return (
    <div className="kanban-board">
      {getOrder().map((key) => (
        <Column
          key={key}
          title={key}
          tasks={groupedTickets[key] || []}
          grouping={grouping}
          sorting={sorting}
          users={users}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
