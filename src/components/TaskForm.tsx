import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 } from "uuid";
import { Task } from "../interfaces/Task";

interface Props {
  addTask: (task: Task) => void;
}

const initialTask: Task = {
  id: '',
  title: "",
  description: "",
  done: false,
};

export function TaskForm({ addTask }: Props) {
  const [task, setTask] = useState<Task>(initialTask);
  const inputTitle = useRef<HTMLInputElement>(null);


  const handleInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({...task, id: v4()});
    setTask(initialTask);
    inputTitle.current?.focus();
  };

  return (
    <div className="card card-body">
      <h1>Add Task</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Task title"
            value={task.title}
            onChange={handleInputChange}
            autoFocus
            ref={inputTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Task Description</label>
          <textarea
            name="description"
            id="description"
            rows={2}
            placeholder="Write a description"
            className="form-control"
            value={task.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
