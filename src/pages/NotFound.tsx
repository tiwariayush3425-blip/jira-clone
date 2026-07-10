import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h1" fontWeight="bold">
        404
      </Typography>

      <Typography variant="h5">
        Page Not Found
      </Typography>

      <Button
        component={Link}
        to="/dashboard"
        variant="contained"
      >
        Go to Dashboard
      </Button>
    </Box>
  );
}

export default NotFound;