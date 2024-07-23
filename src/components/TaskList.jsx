import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, filter, userFilter, setTasks }) {
  const filteredTasks = tasks.filter(
    (task) =>
      (filter === "all" ||
        (filter === "completed" ? task.completed : !task.completed)) &&
      (userFilter === "all" || task.addedBy.id === parseInt(userFilter, 10))
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
