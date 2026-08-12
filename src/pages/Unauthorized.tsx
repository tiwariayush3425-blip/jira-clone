import { Box, Button, Paper, Typography } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
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
        <BlockIcon
          sx={{
            fontSize: 70,
            mb: 2,
          }}
        />

        <Typography variant="h3" fontWeight="bold" gutterBottom>
          403
        </Typography>

        <Typography variant="h6" gutterBottom>
          Unauthorized Access
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          You don't have permission to access this page.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </Paper>
    </Box>
  );
}

export default Unauthorized;