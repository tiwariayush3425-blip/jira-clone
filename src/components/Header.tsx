import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        borderBottom: "1px solid #ddd",
        bgcolor: "#fff",
      }}
    >
      <Typography
  variant="h5"
  sx={{ fontWeight: "bold" }}
>
        Project Management
      </Typography>

      <Button
  variant="contained"
  size="large"
  startIcon={<AddIcon />}
  sx={{
    borderRadius: 2,
    px: 3,
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }}
>
  Add Task
</Button>
    </Box>
  );
}

export default Header;