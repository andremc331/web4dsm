import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function CategoryList() {
  const { categories } = useContext(TaskContext);

  return (
    <div>
      {categories.map(cat => (
        <div key={cat.name} style={{ marginBottom: 30 }}>
          <h2>{cat.name}</h2>

          <AddTask category={cat.name} />
          <TaskList category={cat.name} />

          <hr />
        </div>
      ))}
    </div>
  );
}