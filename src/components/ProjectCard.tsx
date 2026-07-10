import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  Avatar,
  AvatarGroup,
  Box,
} from "@mui/material";

type ProjectCardProps = {
  title: string;
  description: string;
  progress: number;
  status: string;
};

function ProjectCard({
  title,
  description,
  progress,
  status,
}: ProjectCardProps) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>

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
            color="primary"
            size="small"
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;