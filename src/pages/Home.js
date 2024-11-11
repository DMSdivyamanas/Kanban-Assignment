import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar/TopBar";
import KanbanBoard from "../components/KanbanBoard/KanbanBoard";

const Home = () => {
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem("grouping") || "default";
  });
  const [sorting, setSorting] = useState(() => {
    return localStorage.getItem("sorting") || "priority";
  });

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem("sorting", sorting);
  }, [sorting]);

  return (
    <div>
      <TopBar setGrouping={setGrouping} setSorting={setSorting} />
      <KanbanBoard grouping={grouping} sorting={sorting} />
    </div>
  );
};

export default Home;
