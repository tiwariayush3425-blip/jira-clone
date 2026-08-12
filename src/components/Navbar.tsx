import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Avatar,
  IconButton,
  InputAdornment,
  Badge,
  Menu,
  MenuItem,
  ListItemText,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

type Notification = {
  id: number;
  message: string;
  read: boolean;
};

const [notifications, setNotifications] = useState<Notification[]>([
  {
    id: 1,
    message: "Task 'UI Design' assigned to you",
    read: false,
  },
  {
    id: 2,
    message: "Project deadline is tomorrow",
    read: false,
  },
  {
    id: 3,
    message: "Task moved to Done",
    read: true,
  },
]);

const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};
 const unreadCount = notifications.filter(
  (notification) => !notification.read
).length;

const markAsRead = (id: number) => {
  setNotifications((prev) =>
    prev.map((notification) =>
      notification.id === id
        ? { ...notification, read: true }
        : notification
    )
  );
};

const markAllAsRead = () => {
  setNotifications((prev) =>
    prev.map((notification) => ({
      ...notification,
      read: true,
    }))
  );
};

const deleteNotification = (id: number) => {
  setNotifications((prev) =>
    prev.filter((notification) => notification.id !== id)
  );
};
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

        <>
  <IconButton
    color="inherit"
    sx={{ p: 1 }}
    onClick={handleOpen}
  >
    <Badge
  badgeContent={unreadCount}
  color="error"
>
      <NotificationsIcon />
    </Badge>
  </IconButton>

  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
  >
    
    <Box
  sx={{
    px: 2,
    py: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <Typography fontWeight="bold">
    Notifications
  </Typography>

  <MenuItem
    onClick={markAllAsRead}
    disabled={unreadCount === 0}
    sx={{ fontSize: "0.8rem" }}
  >
    Mark all read
  </MenuItem>
</Box>

{notifications.length === 0 ? (
  <MenuItem disabled>
    <ListItemText primary="No notifications" />
  </MenuItem>
) : (
  notifications.map((notification) => (
    <MenuItem
      key={notification.id}
      onClick={() => {
        markAsRead(notification.id);
        handleClose();
      }}
      sx={{
        backgroundColor: notification.read
          ? "transparent"
          : "action.hover",
      }}
    >
      <ListItemText
        primary={notification.message}
        secondary={notification.read ? "Read" : "Unread"}
        primaryTypographyProps={{
          fontWeight: notification.read ? "normal" : "bold",
        }}
      />

      <IconButton
        size="small"
        onClick={(event) => {
          event.stopPropagation();
          deleteNotification(notification.id);
        }}
      >
        <DeleteOutlineIcon fontSize="small" />
      </IconButton>
    </MenuItem>
  ))
)}
  </Menu>
</>

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