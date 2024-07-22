import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButtons";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { name: "created task 1", completed: false },
    { name: "edited task", completed: false },
    { name: "new cool task", completed: true },
  ]);
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <Header />
      <div className="App">
        <div className="content">
          <TaskForm setTasks={setTasks} />
          <FilterButtons setFilter={setFilter} />
          <TaskList tasks={tasks} filter={filter} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
