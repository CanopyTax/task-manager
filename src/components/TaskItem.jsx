import React, { useState, useEffect, useRef } from "react";

function TaskItem({ task, index, setTasks }) {
  const [showSubtasks, setShowSubtasks] = useState(false);
  const [newSubtask, setNewSubtask] = useState("");
  const taskItemRef = useRef(null);

  const toggeCompletion = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index ? { ...t, completed: !t.complted } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const addSubtask = () => {
    const newSubtaskObject = {
      name: newSubtask,
      completed: false,
      subtasks: [],
      addedBy: task.addedBy,
    };
    task.subtasks.push(newSubtaskObject);
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index ? { ...t, subtasks: task.subtasks } : t
      )
    );
    setNewSubtask("");
  };

  const deleteSubtask = (subtaskIndex) => {
    const updatedSubtasks = task.subtasks.filter((_, i) => i !== subtaskIndex);
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index ? { ...t, subtasks: updatedSubtasks } : t
      )
    );
  };

  useEffect(() => {
    const currentRef = taskItemRef.current;
    currentRef.addEventListener("click", () => setShowSubtasks(!showSubtasks));
  }, []);

  return (
    <li className="task-item" ref={taskItemRef}>
      <span className="task-item-header">
        <span className={task.completed ? "completed" : undefined}>
          {task.name} (Added by: {task.addedBy.name})
        </span>
        <div className="task-item-buttons">
          <button onClick={toggeCompletion}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={deleteTask}>Delete</button>
          <div className="caret">{showSubtasks ? "▼" : "▶"}</div>
        </div>
      </span>
      {showSubtasks && (
        <ul className="subtasks">
          <div className="subtask-input-container">
            <input
              type="text"
              value={newSubtask}
              onChange={(e) => setNewSubtask(e.target.value)}
              placeholder="Enter subtask"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addSubtask();
                }
              }}
            />
            <button onClick={addSubtask}>Add Subtask</button>
          </div>
          {task.subtasks &&
            task.subtasks.map((subtask, subIndex) => (
              <li key={subIndex} className="subtask-item">
                <span>{subtask.name}</span>
                <button onClick={deleteSubtask(subIndex)}>Delete</button>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
}

export default TaskItem;
