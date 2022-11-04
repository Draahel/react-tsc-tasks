import React from "react";
import { Task } from "../interfaces/Task";
import { TaskCard } from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: string) => void;
}
export function TaskList({ tasks, deleteTask }: Props) {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-4 pb-4" key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask}/>
        </div>
      ))}
    </>
  );
}
