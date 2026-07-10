import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function ForgotPassword() {
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
          variant="h5"
          fontWeight="bold"
          align="center"
          mb={3}
        >
          Forgot Password
        </Typography>

        <TextField
          label="Email Address"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
        >
          Send Reset Link
        </Button>
      </Paper>
    </Box>
  );
}

export default ForgotPassword;