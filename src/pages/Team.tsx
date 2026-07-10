import { Box, Typography } from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";
import TeamMemberCard from "../components/TeamMemberCard";
import users from "../data/users";

function Team() {
  return (
    <DashboardLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3 }}
      >
        Team Members
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
          },
          gap: 3,
        }}
      >
        {users.map((user) => (
          <TeamMemberCard
            key={user.id}
            name={user.name}
            role={user.role}
            email={user.email}
          />
        ))}
      </Box>
    </DashboardLayout>
  );
}

export default Team;