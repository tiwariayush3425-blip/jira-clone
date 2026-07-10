import {
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Typography,
  Divider,
} from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";
import { useThemeContext } from "../context/ThemeContext";


function Settings() {
  const { toggleTheme } = useThemeContext();
  return (
    <DashboardLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3 }}
      >
        Settings
      </Typography>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6">
            Appearance
          </Typography>

          <FormControlLabel
          control={
          <Switch
          onChange={toggleTheme}
          />
          }
          label="Dark Theme"
          />

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6">
            Notifications
          </Typography>

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Email Notifications"
          />

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6">
            Account
          </Typography>

          <Typography color="text.secondary">
            Password and account settings will be available in Phase 2.
          </Typography>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}

export default Settings;