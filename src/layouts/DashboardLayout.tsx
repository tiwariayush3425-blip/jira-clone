import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flex: 1 }}>
        <Navbar />

        <Box
  sx={{
    p: {
      xs: 2,
      sm: 3,
      md: 4,
    },
    bgcolor: "#f8f9fb",
    minHeight: "calc(100vh - 64px)",
  }}
>
  {children}
</Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;