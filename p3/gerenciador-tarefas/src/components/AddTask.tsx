import { useState, useContext, FormEvent } from "react";
import { TaskContext } from "../context/TaskContext";

interface Props {
  category: string;
}

export default function AddTask({ category }: Props) {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTask(category, text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Adicionar Tarefa</h4>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}