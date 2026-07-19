import {
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import CustomDialog from "./CustomDialog";
import type { Task } from "../types/task";

type HeaderProps = {
  addTask: (newTask: Task) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTask: Task | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  priorityFilter: string;
  setPriorityFilter: React.Dispatch<React.SetStateAction<string>>;
  updateTask: (updatedTask: Task) => void;
};

function Header({
  addTask,
  updateTask,
  open,
  setOpen,
  selectedTask,
  setSelectedTask,
  searchTerm,
  setSearchTerm,
  priorityFilter,
  setPriorityFilter,
}: HeaderProps) {
    const handleClose = () => {
    setOpen(false);
    setSelectedTask(null);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #ddd",
          bgcolor: "#fff",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>

        <TextField
          size="small"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => {
            console.log("Typing:", e.target.value);
            setSearchTerm(e.target.value);
          }}
        />
        <FormControl size="small" sx={{ width: 160 }}>
  <InputLabel>Priority</InputLabel>

  <Select
    value={priorityFilter}
    label="Priority"
    onChange={(e) => setPriorityFilter(e.target.value)}
  >
    <MenuItem value="All">All</MenuItem>
    <MenuItem value="High">High</MenuItem>
    <MenuItem value="Medium">Medium</MenuItem>
    <MenuItem value="Low">Low</MenuItem>
  </Select>
</FormControl>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Task
        </Button>
      </Box>

      <CustomDialog
  open={open}
  handleClose={handleClose}
  addTask={addTask}
  selectedTask={selectedTask}
  updateTask={updateTask}
/>
    </>
  );
}

export default Header;
