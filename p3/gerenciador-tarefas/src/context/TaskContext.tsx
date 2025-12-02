import { createContext, useState, ReactNode } from "react";

export interface Task {
  text: string;
  done: boolean;
}

export interface Category {
  name: string;
  tasks: Task[];
}

interface TaskContextProps {
  categories: Category[];
  addCategory: (name: string) => void;
  addTask: (categoryName: string, taskText: string) => void;
  toggleTask: (categoryName: string, index: number) => void;
}

export const TaskContext = createContext<TaskContextProps>({
  categories: [],
  addCategory: () => {},
  addTask: () => {},
  toggleTask: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: ProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  const addCategory = (name: string) => {
    if (!name.trim()) return;

    setCategories(prev => [...prev, { name, tasks: [] }]);
  };

  const addTask = (categoryName: string, taskText: string) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.name === categoryName
          ? { ...cat, tasks: [...cat.tasks, { text: taskText, done: false }] }
          : cat
      )
    );
  };

  const toggleTask = (categoryName: string, index: number) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.name === categoryName
          ? {
              ...cat,
              tasks: cat.tasks.map((task, i) =>
                i === index ? { ...task, done: !task.done } : task
              ),
            }
          : cat
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ categories, addCategory, addTask, toggleTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}