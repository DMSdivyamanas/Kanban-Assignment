import React, { useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import KanbanBoard from "../components/KanbanBoard/KanbanBoard";

const Home = () => {
  const [grouping, setGrouping] = useState("default");
  const [sorting, setSorting] = useState("priority");

  return (
    <div>
      <TopBar setGrouping={setGrouping} setSorting={setSorting} />
      <KanbanBoard grouping={grouping} sorting={sorting} />
    </div>
  );
};

export default Home;
