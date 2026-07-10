import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function Login() {
 const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 400,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          mb={3}
        >
          Jira Clone
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <Button
  variant="contained"
  fullWidth
  sx={{ mt: 3, py: 1.5 }}
  onClick={() => navigate("/dashboard")}
>
  Login
</Button>
        <Typography
  sx={{
    mt: 2,
    textAlign: "center",
  }}
>
  <Link
    to="/forgot-password"
    style={{
      textDecoration: "none",
      color: "#1976d2",
      fontWeight: "bold",
    }}
  >
    Forgot Password?
  </Link>
</Typography>
      </Paper>
    </Box>
  );
}

export default Login;