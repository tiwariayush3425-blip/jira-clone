import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

type ProjectCardProps = {
  title: string;
  description: string;
  progress: number;
  status: string;
  onDelete: () => void;
};

function ProjectCard({
  title,
  description,
  progress,
  status,
  onDelete,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            {title}
          </Typography>

          <IconButton
            color="error"
            size="small"
            onClick={onDelete}
            title="Delete project"
          >
            <DeleteIcon />
          </IconButton>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {description}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
          />

          <Typography
            variant="body2"
            sx={{ mt: 1 }}
          >
            {progress}% Complete
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AvatarGroup max={3}>
            <Avatar>A</Avatar>
            <Avatar>B</Avatar>
            <Avatar>C</Avatar>
          </AvatarGroup>

          <Chip
            label={status}
            color={
              status === "Completed"
                ? "success"
                : status === "In Progress"
                ? "primary"
                : "warning"
            }
            size="small"
          />
        </Box>

      </CardContent>
    </Card>
  );
}

export default ProjectCard;