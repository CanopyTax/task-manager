import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, filter, setTasks }) {
  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );

  return (
    <ul>
      {filteredTasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} setTasks={setTasks} />
      ))}
    </ul>
  );
}

export default TaskList;
