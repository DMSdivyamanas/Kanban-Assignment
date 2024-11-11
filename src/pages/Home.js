import React, { useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import KanbanBoard from "../components/KanbanBoard/KanbanBoard";

const Home = () => {
  const [grouping, setGrouping] = useState("default");

  return (
    <div>
      <TopBar setGrouping={setGrouping} />
      <KanbanBoard grouping={grouping} />
    </div>
  );
};

export default Home;
