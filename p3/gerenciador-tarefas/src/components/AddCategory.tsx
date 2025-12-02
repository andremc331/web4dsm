import { useState, useContext, FormEvent } from "react";
import { TaskContext } from "../context/TaskContext";

export default function AddCategory() {
  const [name, setName] = useState("");
  const { addCategory } = useContext(TaskContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addCategory(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Adicionar Nova Categoria</h3>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
