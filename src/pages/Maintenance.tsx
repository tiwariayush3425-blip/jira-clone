import { Box, Button, Paper, Typography } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import { useNavigate } from "react-router-dom";

function Maintenance() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        bgcolor: "#f8f9fb",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 5,
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <BuildIcon sx={{ fontSize: 70, mb: 2 }} />

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Under Maintenance
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          We are currently performing some improvements.
          Please check back shortly.
        </Typography>

        <Button
          variant="contained"
          onClick={() => window.location.reload()}
          sx={{ mr: 1 }}
        >
          Try Again
        </Button>

        <Button
          variant="outlined"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </Button>
      </Paper>
    </Box>
  );
}

export default Maintenance;