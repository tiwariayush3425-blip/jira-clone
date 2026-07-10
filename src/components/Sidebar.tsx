import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";

import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    text: "Projects",
    icon: <FolderIcon />,
    path: "/projects",
  },
  {
    text: "Team",
    icon: <GroupsIcon />,
    path: "/team",
  },
  {
    text: "Profile",
    icon: <PersonIcon />,
    path: "/profile",
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];

function Sidebar() {
  const location = useLocation();
  return (
    <Box
      sx={{
        width: {
        xs: 70,
        sm: 200,
        md: 220,
        },
        minHeight: "100vh",
        borderRight: "2px solid #1976d2",
        bgcolor: "#e3f2fd",
      }}
    >
      <List>
        {menuItems.map((item) => (
         <ListItemButton
  key={item.text}
  component={Link}
  to={item.path}
  selected={location.pathname === item.path}
  sx={{
    mx: 1,
    my: 0.5,
    borderRadius: 2,

    "&.Mui-selected": {
      bgcolor: "#1976d2",
      color: "#fff",
    },

    "&.Mui-selected .MuiListItemIcon-root": {
      color: "#fff",
    },

    "&:hover": {
      bgcolor: "#bbdefb",
    },
  }}
>
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText
             primary={item.text}
             sx={{
             display: {
             xs: "none",
             sm: "block",
          },
       }}
        />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;