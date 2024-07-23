import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButtons";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Complete TPS reports",
      completed: false,
      addedBy: { id: 1, name: "John" },
    },
    {
      name: "Reconcile Dunder Mifflin accounts",
      completed: false,
      addedBy: { id: 2, name: "Jane" },
    },
    {
      name: "Review Peter's timesheet",
      completed: true,
      addedBy: { id: 1, name: "John" },
    },
  ]);
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <Header />
      <div className="App">
        <div className="content">
          <TaskForm setTasks={setTasks} />
        </div>
        <div className="content">
          <FilterButtons setFilter={setFilter} />
          <TaskList tasks={tasks} filter={filter} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
