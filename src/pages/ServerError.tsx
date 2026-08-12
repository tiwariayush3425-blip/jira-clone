import { Box, Button, Paper, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

function ServerError() {
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
        <ErrorOutlineIcon sx={{ fontSize: 70, mb: 2 }} />

        <Typography variant="h3" fontWeight="bold" gutterBottom>
          500
        </Typography>

        <Typography variant="h6" gutterBottom>
          Internal Server Error
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Something went wrong on our side. Please try again later.
        </Typography>

        <Button
          variant="contained"
          onClick={() => window.location.reload()}
          sx={{ mr: 1 }}
        >
          Retry
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

export default ServerError;