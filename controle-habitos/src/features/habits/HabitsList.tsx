import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { clearCompleted } from "./habitsSlice";
import HabitItem from "../../components/HabitItem";
import { Button, Box } from "@mui/material";

const HabitsList: React.FC = () => {
  const { items, filter } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch();

  const filtered = filter === "all" ? items : items.filter(h => h.category === filter);

  return (
    <Box>
      {filtered.map(h => (
        <HabitItem key={h.id} {...h} />
      ))}
      <Button onClick={() => dispatch(clearCompleted())} sx={{ mt: 2 }} variant="outlined">
        Limpar concluídos
      </Button>
    </Box>
  );
};

export default HabitsList;