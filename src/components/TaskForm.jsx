import React, { useState } from "react";

function TaskForm({ setTasks, users }) {
  const [taskName, setTaskName] = useState("");
  const [selectedUser, setSelectedUser] = useState(users[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.id === selectedUser);
    setTasks((prevTasks) => [
      ...prevTasks,
      { name: taskName, completed: false, subtasks: [], addedBy: user },
    ]);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        onChange={(e) => setSelectedUser(parseInt(e.target.value, 10))}
        value={selectedUser}
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
