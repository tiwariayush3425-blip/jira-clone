
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Draggable } from "@hello-pangea/dnd";

type TaskCardProps = {
  id: number;
  index: number;
  title: string;
  description: string;
  priority: string;
  assignee: string;
  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
};

function TaskCard({
  id,
  index,
  title,
  description,
  priority,
  assignee,
  deleteTask,
  editTask,
}: TaskCardProps) {
  return (
  <Draggable
    draggableId={String(id)}
    index={index}
  >

    {(provided) => (

      <Card
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}

        sx={{
          mb: 2,
          borderRadius: 3,
          boxShadow: 2,
          transition: "0.3s",
          cursor: "grab",

          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 6,
          },
        }}
      >
      <CardContent>
        

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ my: 1, minHeight:45, }}
        >
          {title}
          {description}
        </Typography>

        <Chip
  label={priority}
  size="small"
  color={
    priority === "High"
      ? "error"
      : priority === "Medium"
      ? "warning"
      : "success"
  }
/>

       <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
  }}
>
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Avatar sx={{ width: 30, height: 30 }}>
      {String(assignee).charAt(0)}
    </Avatar>

    <Typography variant="body2">
      {assignee}
    </Typography>
  </Box>
  <IconButton
  color="primary"
  onClick={() => editTask(id)}
>
  <EditIcon />
</IconButton>
  <IconButton
    color="error"
    onClick={() => deleteTask(id)}
  >
    <DeleteIcon />
  </IconButton>
</Box>
      </CardContent>
        </Card>

    )}

  </Draggable>
);
}

export default TaskCard;