import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";

function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "manager" | "member">("member");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter Email and Password");
      return;
    }

    login(
      {
        id: 1,
        name: "Ayush",
        email,
        role,
      },
      "demo-token"
    );

    navigate("/dashboard");
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

        <TextField
          select
          label="Role"
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) =>
            setRole(e.target.value as "admin" | "manager" | "member")
          }
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="manager">Project Manager</MenuItem>
          <MenuItem value="member">Team Member</MenuItem>
        </TextField>

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