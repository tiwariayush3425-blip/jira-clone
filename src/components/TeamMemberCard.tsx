import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

type TeamMemberCardProps = {
  name: string;
  role: string;
  email: string;
  onDelete: () => void;
};

function TeamMemberCard({
  name,
  role,
  email,
  onDelete,
}: TeamMemberCardProps) {
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
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              width: 50,
              height: 50,
            }}
          >
            {name.charAt(0)}
          </Avatar>

          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {name}
            </Typography>

            <Typography color="text.secondary">
              {role}
            </Typography>

            <Typography variant="body2">
              {email}
            </Typography>
          </Box>

          <IconButton
            color="error"
            onClick={onDelete}
            title="Remove member"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TeamMemberCard;