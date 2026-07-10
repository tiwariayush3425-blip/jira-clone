import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

type TeamMemberCardProps = {
  name: string;
  role: string;
  email: string;
};

function TeamMemberCard({
  name,
  role,
  email,
}: TeamMemberCardProps) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar>
            {name.charAt(0)}
          </Avatar>

          <Box>
            <Typography variant="h6">
              {name}
            </Typography>

            <Typography color="text.secondary">
              {role}
            </Typography>

            <Typography variant="body2">
              {email}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TeamMemberCard;