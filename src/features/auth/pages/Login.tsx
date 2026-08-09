import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { MenuItem } from "@mui/material";
import React from "react";

import {
  useAuthStore,
  type UserRole,
} from "../../../store/authStore";


function Login() {

  const navigate = useNavigate();
  const [role, setRole] = React.useState<UserRole>("member");

  const login = useAuthStore(
    (state) => state.login
  );


  const handleLogin = () => {

    login(
      {
        id: 1,
        name: "Ayush",
        email: "ayush@gmail.com",
        role: role as UserRole,
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
        <TextField
  select
  label="Role"
  fullWidth
  margin="normal"
  value={role}
  onChange={(e) =>
    setRole(
      e.target.value as
        | "admin"
        | "manager"
        | "member"
    )
  }
>
  <MenuItem value="admin">
    Admin
  </MenuItem>

  <MenuItem value="manager">
    Project Manager
  </MenuItem>

  <MenuItem value="member">
    Team Member
  </MenuItem>
</TextField>


        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            py: 1.5,
          }}
          onClick={handleLogin}
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