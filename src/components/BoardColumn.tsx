import { Paper, Typography, Box } from "@mui/material";
import TaskCard from "./TaskCard";
import { tasks } from "../data/tasks";

type BoardColumnProps = {
  title: string;
  status: string;
};

  function BoardColumn({
  title,
  status,
}: BoardColumnProps) {

  const filteredTasks = tasks.filter(
    (task) => task.status === status
  );

  return (
    <Paper
      elevation={1}
      sx={{
        width: {
        xs: 280,
        sm: 300,
        md: 320,
       },
        minHeight: {
        xs: 450,
        md: 550,
        },
        p: {
        xs: 1.5,
        md: 2,
        },
        bgcolor: "#f4f5f7",
        borderRadius:3,
        boxShadow: 2,
      }}
    >
      <Typography
  variant="h6"
  sx={{
  fontWeight: "bold",
  mb: 2,
  fontSize: {
    xs: "1rem",
    md: "1.25rem",
   },
   }}
>
  {title} ({filteredTasks.length})
</Typography>

      <Box>
        {filteredTasks.map((task) => (
    <TaskCard
      key={task.id}
      title={task.title}
      description={task.description}
      priority={task.priority}
      assignee={task.assignee}
    />
  ))}
      </Box>
    </Paper>
  );
}

export default BoardColumn;