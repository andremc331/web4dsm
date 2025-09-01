import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/habits/habitsSlice";
import { RootState } from "../app/store";
import { Button, ButtonGroup } from "@mui/material";

const HabitFilter: React.FC = () => {
  const { filter, items } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch();

  const categories = Array.from(new Set(items.map(h => h.category)));

  return (
    <ButtonGroup sx={{ mb: 2 }}>
      <Button
        variant={filter === "all" ? "contained" : "outlined"}
        onClick={() => dispatch(setFilter("all"))}
      >
        Todos
      </Button>
      {categories.map(cat => (
        <Button
          key={cat}
          variant={filter === cat ? "contained" : "outlined"}
          onClick={() => dispatch(setFilter(cat))}
        >
          {cat}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default HabitFilter;