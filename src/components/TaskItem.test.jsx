import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskItem from "./TaskItem";

test("it should add a new subtask", () => {
  const { getByPlaceholderText, getByText } = render(
    <TaskItem
      task={{
        name: "Test Task",
        completed: false,
        subtasks: [],
      }}
      index={0}
      setTasks={() => {}}
    />
  );

  const taskItem = getByText("▶");
  fireEvent.click(taskItem);
  const input = getByPlaceholderText("Enter subtask");
  fireEvent.change(input, { target: { value: "New Subtask" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
});
