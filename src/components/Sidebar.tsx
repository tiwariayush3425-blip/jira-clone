import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

import {
  Box,
  Drawer,
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

type SidebarProps = {
  mobileOpen?: boolean;
  onClose?: () => void;
};

function Sidebar({
  mobileOpen = false,
  onClose = () => {},
}: SidebarProps) {
  const location = useLocation();

  const sidebarContent = (
    <Box
      sx={{
        width: 220,
        minHeight: "100vh",
        bgcolor: "#e3f2fd",
        borderRight: "2px solid #1976d2",
      }}
    >
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={onClose}
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
            <ListItemIcon
              sx={{
                minWidth: 42,
                color:
                  location.pathname === item.path
                    ? "#fff"
                    : "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        {sidebarContent}
      </Box>

      {/* Mobile Sidebar */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={onClose}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    </>
  );
}

export default Sidebar;