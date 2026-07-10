import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;