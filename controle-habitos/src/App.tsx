import React from "react";
import HabitForm from "./components/HabitForm";
import HabitFilter from "./components/HabitFilter";
import HabitsList from "./features/habits/HabitsList";
import { Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Controle de Hábitos Diários
      </Typography>
      <HabitForm />
      <HabitFilter />
      <HabitsList />
    </Container>
  );
};

export default App;