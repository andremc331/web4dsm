import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

interface Props {
  category: string;
}

export default function TaskList({ category }: Props) {
  const { categories, toggleTask } = useContext(TaskContext);

  const selected = categories.find(c => c.name === category);

  if (!selected) return null;

  return (
    <div>
      {selected.tasks.map((task, index) => (
        <label key={index} style={{ display: "block", marginTop: 5 }}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(category, index)}
          />
          {task.text}
        </label>
      ))}
    </div>
  );
}