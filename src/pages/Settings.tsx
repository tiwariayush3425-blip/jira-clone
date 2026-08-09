import {
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Typography,
  Divider,
  Box,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import { useThemeContext } from "../context/ThemeContext";

function Settings() {
  const { toggleTheme } = useThemeContext();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("emailNotifications");

    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      String(darkMode)
    );
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem(
      "emailNotifications",
      String(notifications)
    );
  }, [notifications]);

  const handleThemeChange = () => {
    setDarkMode((prev) => !prev);
    toggleTheme();

    toast.success("Theme preference updated!");
  };

  const handleNotificationChange = () => {
    setNotifications((prev) => !prev);

    toast.success(
      notifications
        ? "Email notifications disabled"
        : "Email notifications enabled"
    );
  };

  const handleReset = () => {
    setDarkMode(false);
    setNotifications(true);

    localStorage.setItem("darkMode", "false");
    localStorage.setItem(
      "emailNotifications",
      "true"
    );

    toast.success("Settings reset successfully!");
  };

  return (
    <DashboardLayout>
      <Box sx={{ p: { xs: 2, md: 3 } }}>

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          Settings
        </Typography>

        <Card sx={{ borderRadius: 3 }}>
          <CardContent>

            {/* Appearance */}

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Appearance
            </Typography>

            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleThemeChange}
                />
              }
              label="Dark Theme"
            />

            <Divider sx={{ my: 3 }} />

            {/* Notifications */}

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Notifications
            </Typography>

            <FormControlLabel
              control={
                <Switch
                  checked={notifications}
                  onChange={handleNotificationChange}
                />
              }
              label="Email Notifications"
            />

            <Divider sx={{ my: 3 }} />

            {/* Account */}

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Account
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              Manage your account preferences and
              application settings.
            </Typography>

            <Button
              variant="outlined"
              color="error"
              onClick={handleReset}
            >
              Reset Settings
            </Button>

          </CardContent>
        </Card>

      </Box>
    </DashboardLayout>
  );
}

export default Settings;