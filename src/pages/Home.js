import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar/TopBar";
import KanbanBoard from "../components/KanbanBoard/KanbanBoard";

/*
  This project is a Kanban board application built using React. It is structured with various components and utilities to manage tasks effectively.

  - Project Setup:
    - The main entry point is `src/index.js`, which renders the `App` component into the root DOM node.

  - Core Components:
    - `App.js`: Serves as the root component, rendering the `Home` component.
    - `Home.js`: Manages the state for task grouping and sorting, and renders the `TopBar` and `KanbanBoard` components.
    - `TopBar.js`: Provides UI controls for changing task grouping and sorting preferences.
    - `KanbanBoard.js`: Displays tasks in columns based on the current grouping and sorting settings.
    - `Column.js`: Represents a single column in the Kanban board, containing task cards.
    - `Card.js`: Displays individual task details within a column.

  - State Management:
    - Uses React's `useState` and `useEffect` hooks for managing and persisting user preferences (grouping and sorting) in `localStorage`.

  - Data Fetching:
    - `apiService.js`: Contains a function to fetch task data from an external API.

  - Utility Functions:
    - `utility.js`: Provides helper functions, such as `getColorForInitial`, to determine colors based on initials.

  - Assets and Styling:
    - Assets are managed in `assets.js`, importing various SVG icons used throughout the application.
    - CSS files are used for styling components, ensuring a responsive and visually appealing UI.

  - Configuration:
    - `package.json` defines project dependencies and scripts for building, testing, and running the application.
    - `.gitignore` specifies files and directories to be excluded from version control.

  - Additional Files:
    - `README.md` provides instructions for setting up and running the project.
    - `public/index.html` serves as the HTML template for the application.

  This project demonstrates a modular approach to building a React application, with a focus on component reusability, state management, and user interaction.
*/

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
