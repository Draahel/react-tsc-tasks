import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Task } from "./interfaces/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: "Learn React",
      description: "Learn React",
      done: false,
    },
  ]);

  const addTask = (task:Task) =>setTasks([...tasks,task])

  const deleteTask = (id:string) => setTasks(tasks.filter(task => task.id !== id));
    

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <NavBar />
      <h1>Tasks List</h1>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addTask={addTask}></TaskForm>
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
