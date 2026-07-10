import { Box, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

type EmptyStateProps = {
  message: string;
};

function EmptyState({ message }: EmptyStateProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
      }}
    >
      <InboxIcon
        sx={{
          fontSize: 60,
          color: "gray",
          mb: 2,
        }}
      />

      <Typography
        variant="h6"
        color="text.secondary"
      >
        {message}
      </Typography>
    </Box>
  );
}

export default EmptyState;