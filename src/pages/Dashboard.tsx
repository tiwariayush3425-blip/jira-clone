import { Box } from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";
import Header from "../components/Header";
import BoardColumn from "../components/BoardColumn";

function Dashboard() {
  
  return (
    <DashboardLayout>
      
      <Header />
      
      
      <Box
        sx={{
          display: "flex",
          gap: {
            xs: 2,
            md: 3,
          },
          p: {
            xs: 2,
            md: 3,
          },
          overflowX: "auto",
          alignItems: "flex-start",
          flexWrap: {
            xs: "nowrap",
            md: "nowrap",
          },
        }}
      >
        <BoardColumn title="Todo" status="Todo" />
        <BoardColumn title="In Progress" status="In Progress" />
        <BoardColumn title="Done" status="Done" />
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;