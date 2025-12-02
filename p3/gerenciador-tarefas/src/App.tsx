import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div style={{ width: 500, margin: "20px auto" }}>
        <h1>Gerenciador de Tarefas por Categoria</h1>

        <AddCategory />
        <hr />

        <CategoryList />
      </div>
    </TaskProvider>
  );
}

export default App;