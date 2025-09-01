import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleHabit, deleteHabit, editHabit } from "../features/habits/habitsSlice";
import { Checkbox, IconButton, TextField, Box } from "@mui/material";
import { Delete, Edit, Save } from "@mui/icons-material";

interface Props {
  id: string;
  name: string;
  category: string;
  completed: boolean;
}

const HabitItem: React.FC<Props> = ({ id, name, category, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newCategory, setNewCategory] = useState(category);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Checkbox
        checked={completed}
        onChange={() => dispatch(toggleHabit(id))}
      />
      {isEditing ? (
        <>
          <TextField
            size="small"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            size="small"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <IconButton
            onClick={() => {
              dispatch(editHabit({ id, name: newName, category: newCategory }));
              setIsEditing(false);
            }}
          >
            <Save />
          </IconButton>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completed ? "line-through" : "none" }}>
            {name} ({category})
          </span>
          <IconButton onClick={() => setIsEditing(true)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => dispatch(deleteHabit(id))}>
            <Delete />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default HabitItem;