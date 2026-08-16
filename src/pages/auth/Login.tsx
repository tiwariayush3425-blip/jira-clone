import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { loginUser } from "../../services/authService";
function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleLogin = async () => {
  if (!email.trim() || !password.trim()) {
    alert("Please enter Email and Password");
    return;
  }

  try {
    const response = await loginUser(
      email.trim(),
      password
    );

    login(response.user, response.token);

    navigate("/dashboard");
  } catch (error) {
    alert("Invalid email or password");
  }
};

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
        <Typography variant="h4" align="center" mb={3}>
          Jira Clone
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography sx={{ mt: 2, textAlign: "center" }}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;