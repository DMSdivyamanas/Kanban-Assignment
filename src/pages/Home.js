import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Card from "../components/Card/Card";
import Assets from "../assets/assests";
import KanbanBoard from "../components/KanbanBoard/KanbanBoard";
const Home = () => {
  return (
    <div>
      <TopBar />
      <KanbanBoard />
    </div>
  );
};

export default Home;
