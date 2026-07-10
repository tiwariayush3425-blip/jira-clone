import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Avatar,
  IconButton,
  InputAdornment,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#1565c0",
      }}
    >
      <Toolbar
  sx={{
    gap: 1,
    minHeight: 64,
  }}
>
        <Typography
  variant="h5"
  sx={{
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: {
      xs: "1.1rem",
      sm: "1.4rem",
    },
  }}
>
  Jira Clone
</Typography>

        <Box sx={{ flexGrow: 1 }} />

        <TextField
          size="small"
          placeholder="Search tasks..."
          slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
          }}
          sx={{
            bgcolor: "white",
            borderRadius: 2,
            width: {
            xs: 120,
            sm: 180,
            md: 260,
          },
            mr: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />

        <IconButton
         color="inherit"
         sx={{
         p: 1,
         }}
         >
          <NotificationsIcon />
        </IconButton>

        <Avatar
  sx={{
         ml: {
         xs: 1,
         sm: 2,
         },
         bgcolor: "#ff9800",
         fontWeight: "bold",
         width: {
         xs: 35,
         md: 40,
         },
         height: {
         xs: 35,
         md: 40,
         },
         }}
         >
         A
         </Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;