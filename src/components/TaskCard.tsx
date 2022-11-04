import React from "react";
import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id:string) => void;
}

export function TaskCard({task, deleteTask}:Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark" >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}
