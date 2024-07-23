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
      addedBy: { id: 1, name: "Kevin" },
      subtasks: [],
    },
    {
      name: "Reconcile Dunder Mifflin accounts",
      completed: false,
      addedBy: { id: 2, name: "Angela" },
      subtasks: [],
    },
    {
      name: "Review Peter's timesheet",
      completed: true,
      addedBy: { id: 3, name: "Oscar" },
      subtasks: [],
    },
    {
      name: "Party Planning Committee expense reports",
      completed: false,
      addedBy: { id: 2, name: "Angela" },
      subtasks: [],
    },
  ]);
  const [filter, setFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("all");

  const users = tasks.reduce((users, task) => {
    return users.includes(task.addedBy) ? users : [...users, task.addedBy];
  }, []);

  return (
    <div>
      <Header />
      <div className="App">
        <div className="content">
          <TaskForm setTasks={setTasks} users={users} />
        </div>
        <div className="content">
          <FilterButtons
            setFilter={setFilter}
            setUserFilter={setUserFilter}
            users={users}
          />
          <TaskList
            tasks={tasks}
            filter={filter}
            userFilter={userFilter}
            setTasks={setTasks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
