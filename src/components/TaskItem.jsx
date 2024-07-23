import React from "react";

function TaskItem({ task, index, setTasks }) {
  const toggleCompletion = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <li className="task-item">
      <div className="task-item-header">
        <span className={task.completed ? "completed" : ""}>{task.name}</span>
      </div>
      <div className="task-item-buttons">
        <button onClick={toggleCompletion}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
