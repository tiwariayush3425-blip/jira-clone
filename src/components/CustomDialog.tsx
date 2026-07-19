import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  MenuItem,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  taskSchema,
  type TaskFormData,
} from "../schemas/taskSchema";

import type { Task } from "../types/task";

type Props = {
  open: boolean;
  handleClose: () => void;
  addTask: (newTask: Task) => void;
  selectedTask: Task | null;
updateTask: (updatedTask: Task) => void;
};

function CustomDialog({
  open,
  handleClose,
  addTask,
  selectedTask,
  updateTask,
}: Props) {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "Medium",
      assignee: "",
    },
  });

  const onSubmit = (data: TaskFormData) => {
  if (selectedTask) {
    updateTask({
      ...selectedTask,
      ...data,
    });
  } else {
    addTask({
      id: Date.now(),
      ...data,
      status: "Todo",
    });
  }

  handleClose();
};

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Add New Task</DialogTitle>

        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            fullWidth
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={3}
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <TextField
            select
            margin="dense"
            label="Priority"
            fullWidth
            defaultValue="Medium"
            {...register("priority")}
            error={!!errors.priority}
            helperText={errors.priority?.message}
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </TextField>

          <TextField
            margin="dense"
            label="Assignee"
            fullWidth
            {...register("assignee")}
            error={!!errors.assignee}
            helperText={errors.assignee?.message}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          <Button type="submit" variant="contained">
            {selectedTask ? "Update Task" : "Add Task"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CustomDialog;