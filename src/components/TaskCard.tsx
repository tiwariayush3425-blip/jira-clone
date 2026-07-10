
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Box,
} from "@mui/material";

type TaskCardProps = {
  title: string;
  description: string;
  priority: string;
  assignee: string;
};

function TaskCard({
  title,
  description,
  priority,
  assignee,
}: TaskCardProps) {
  return (
    <Card
  sx={{
    mb: 2,
    borderRadius: 3,
    boxShadow: 2,
    transition: "0.3s",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: 6,
    },
  }}
>
      <CardContent>
        <Typography
  variant="h6"
  sx={{ fontWeight: "bold" }}
>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ my: 1, minHeight:45, }}
        >
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
            alignItems: "center",
            mt: 2,
            gap: 1,
          }}
        >
          <Avatar sx={{ width: 30, height: 30 }}>
            {assignee.charAt(0)}
          </Avatar>

          <Typography variant="body2">
            {assignee}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TaskCard;