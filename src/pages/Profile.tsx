import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";

function Profile() {
  return (
    <DashboardLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3 }}
      >
        My Profile
      </Typography>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: 3,
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100,
                fontSize: 40,
              }}
            >
              A
            </Avatar>

            <Box>
              <Typography variant="h5" fontWeight="bold">
                Ayush Tiwari
              </Typography>

              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Frontend Developer passionate about React and TypeScript.
              </Typography>

              <Typography sx={{ mt: 2 }}>
                📧 ayush@example.com
              </Typography>

              <Typography>
                📱 +91 9876543210
              </Typography>

              <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip label="React" />
                <Chip label="TypeScript" />
                <Chip label="Material UI" />
                <Chip label="Git" />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}

export default Profile;