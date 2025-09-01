import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Habit {
  id: string;
  name: string;
  category: string;
  completed: boolean;
}

interface HabitsState {
  items: Habit[];
  filter: string;
}

const initialState: HabitsState = {
  items: [],
  filter: "all",
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<{ name: string; category?: string }>) => {
      state.items.push({
        id: uuidv4(),
        name: action.payload.name,
        category: action.payload.category || "geral",
        completed: false,
      });
    },
    editHabit: (state, action: PayloadAction<{ id: string; name: string; category?: string }>) => {
      const habit = state.items.find(h => h.id === action.payload.id);
      if (habit) {
        habit.name = action.payload.name;
        if (action.payload.category) habit.category = action.payload.category;
      }
    },
    toggleHabit: (state, action: PayloadAction<string>) => {
      const habit = state.items.find(h => h.id === action.payload);
      if (habit) {
        habit.completed = !habit.completed;
      }
    },
    deleteHabit: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(h => h.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.items = state.items.filter(h => !h.completed);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { addHabit, editHabit, toggleHabit, deleteHabit, clearCompleted, setFilter } =
  habitsSlice.actions;

export default habitsSlice.reducer;