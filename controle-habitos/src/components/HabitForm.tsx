import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../features/habits/habitsSlice";
import { TextField, Button, Box } from "@mui/material";

const HabitForm: React.FC = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addHabit({ name, category }));
      setName("");
      setCategory("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField
        label="Hábito"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button type="submit" variant="contained">Adicionar</Button>
    </Box>
  );
};

export default HabitForm;